import React from 'react';
import Modal from './Modal';

const ContactSection = () => {
  const getStartedItems = [
    'Find Wilkins at your nearest store',
    'Join our 7-Day Challenge',
    'Follow us for daily tips'
  ];

  const contactInfo = [
    '📧 hello@terrapure.ph',
    '📱 Follow @TerraPurePH',
    '🌐 www.terrapure.ph'
  ];

  const [email, setEmail] = React.useState("");
  const [submittedEmail, setSubmittedEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email address.');
      setShowErrorModal(true);
      return;
    }
    setSubmitted(false);
    try {
      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to_email: email, message: 'Thank you for reaching out to TerraPure! We will contact you as soon as possible.' })
      });
      const data = await resp.json();
      if (resp.ok) {
        const confirmedEmail = email; // Store email in local variable
        setSubmittedEmail(confirmedEmail); // Set the submitted email
        setSubmitted(true);
        setShowSuccessModal(true);
        setEmail(''); // Clear the input field only once
      } else {
        console.error(data);
        setErrorMessage('Failed to send email. Please try again later.');
        setShowErrorModal(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to send email. Please try again later.');
      setShowErrorModal(true);
    }
  };

  return (
    <>
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Start Your Hydration Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of Filipinos choosing healthier hydration
        </p>
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started Today</h3>
              <div className="space-y-3 text-gray-600">
                {getStartedItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-cyan-600 mr-2">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="space-y-3 text-gray-600">
                {contactInfo.map((info, index) => (
                  <div key={index}>{info}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us Your Email</h3>
          <p className="text-gray-600 mb-4">Want updates or have questions? Enter your email and we'll reach out!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900"
            />
            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Send
            </button>
          </form>
          {submitted && (
            <div className="text-green-600 mt-3">Thank you for your interest!</div>
          )}
        </div>
      </div>
    </section>
    <Modal
      isOpen={showErrorModal}
      onClose={() => setShowErrorModal(false)}
      title="Error"
      message={errorMessage}
    />
    <Modal
      isOpen={showSuccessModal}
      onClose={() => {
        setShowSuccessModal(false);
        setSubmitted(false);
      }}
      title="✨ Welcome to TerraPure!"
      message={`🎉 Thank you for connecting with us!

📧 A confirmation has been sent to:
   ${submittedEmail || 'your email'}

📌 Next Steps:
   • Check your inbox for our welcome email
   • Add hello@terrapure.ph to contacts
   • Watch for hydration tips and updates
   • Start your hydration journey with us

💧 Welcome to the TerraPure family!
   Your path to better hydration begins now.`}
    />
    </>
  );
};

export default ContactSection;
