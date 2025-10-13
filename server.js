require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  console.warn('Missing EmailJS env vars. Check .env');
}

app.post('/send-email', async (req, res) => {
  // Accept either `email` (preferred template variable) or `to_email` from frontend
  const { to_email, email, message } = req.body;
  const recipient = (email || to_email || '').trim();

  // Basic validation: present and simple regex check
  if (!recipient) return res.status(400).json({ error: 'Missing recipient email (email or to_email)' });
  const simpleEmailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!simpleEmailRe.test(recipient)) return res.status(400).json({ error: 'Invalid email format' });

  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: {
      // Map to the template variable named `email`
      email: recipient,
      message: message || ''
    }
  };

  try {
    const resp = await axios.post('https://api.emailjs.com/api/v1.0/email/send', payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json({ ok: true, result: resp.data });
  } catch (err) {
    console.error(err && err.response ? err.response.data : err.message);
    const status = err.response && err.response.status ? err.response.status : 500;
    return res.status(status).json({ error: 'Failed sending email', details: err.response ? err.response.data : err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Email proxy server running on port ${PORT}`));
