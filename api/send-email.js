const axios = require('axios');

// Vercel Serverless Function: forwards POST to EmailJS REST API
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  const { to_email, email, message } = req.body || {};
  const recipient = (email || to_email || '').trim();

  if (!recipient) return res.status(400).json({ error: 'Missing recipient email (email or to_email)' });
  const simpleEmailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!simpleEmailRe.test(recipient)) return res.status(400).json({ error: 'Invalid email format' });

  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('Missing EmailJS env vars. Check Vercel project environment variables');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      email: recipient,
      message: message || ''
    }
  };

  try {
    const resp = await axios.post('https://api.emailjs.com/api/v1.0/email/send', payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.status(200).json({ ok: true, result: resp.data });
  } catch (err) {
    console.error('EmailJS error:', err && err.response ? err.response.data : err.message);
    const status = err.response && err.response.status ? err.response.status : 500;
    return res.status(status).json({ error: 'Failed sending email', details: err.response ? err.response.data : err.message });
  }
};
