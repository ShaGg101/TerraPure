Local Email Proxy Server (EmailJS)

This small Express server proxies requests to EmailJS REST API so you don't expose your EmailJS public key in the browser.

Setup

1. Copy `.env.example` to `.env` and confirm values:

   EMAILJS_SERVICE_ID=service_5t39zmb
   EMAILJS_TEMPLATE_ID=template_0ssl4wl
   EMAILJS_PUBLIC_KEY=l59NORmIbsfZ6OkZ5
   PORT=4000

2. Install dependencies:

   npm install

3. Start the server (from project root):

   npm run start:server

4. Start the React app in a separate terminal:

   npm start

Notes

- For production on Vercel, consider using Vercel Serverless Functions (api/send-email.js) instead of a separate Express server.
- Keep secrets out of version control; use Vercel Environment Variables for deployment.
