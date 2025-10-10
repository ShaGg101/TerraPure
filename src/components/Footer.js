import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { text: 'Health Benefits', section: 'benefits' },
    { text: 'Why Wilkins', section: 'wilkins' },
    { text: '7-Day Challenge', section: 'challenge' }
  ];

  const resources = [
    'Hydration Tips',
    'Health Articles',
    'Store Locator'
  ];

  const socialButtons = ['📘', '📷', '🐦'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <span className="text-3xl font-extrabold text-cyan-400 mb-3 tracking-wide">TerraPure</span>
            <p className="text-gray-300 text-base leading-relaxed">
              Promoting healthy hydration across the Philippines through <span className="font-semibold text-cyan-200">education</span> and <span className="font-semibold text-cyan-200">advocacy</span>.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-cyan-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="hover:text-cyan-400 transition-colors px-0 py-0 bg-transparent border-none outline-none text-left w-full cursor-pointer"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-cyan-200">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button className="hover:text-cyan-400 transition-colors px-0 py-0 bg-transparent border-none outline-none text-left w-full cursor-pointer">
                    {resource}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-cyan-200">Follow Us</h4>
            <div className="flex space-x-3">
              {socialButtons.map((emoji, index) => (
                <button
                  key={index}
                  className="bg-cyan-600 p-2 rounded-full hover:bg-cyan-700 transition-colors text-xl shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Social Link"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 TerraPure. Promoting healthy hydration. <span className="text-cyan-300">Wilkins</span> is a registered trademark.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
