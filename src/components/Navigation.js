import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import useActiveSection from '../hooks/useActiveSection';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, toggleCart } = useCart();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  const totalItems = getTotalItems();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/95'
      }`}
      style={{ overflowX: 'hidden' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-cyan-600">TerraPure</div>
            <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">
              Hydrate Better. Live Healthier.
            </div>
          </div>


          <div className="hidden md:flex space-x-5 lg:space-x-7">
            {['home', 'benefits', 'wilkins', 'products', 'challenge', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'text-cyan-600 font-semibold'
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {section === 'home'
                  ? 'Home'
                  : section === 'benefits'
                  ? 'Health Benefits'
                  : section === 'wilkins'
                  ? 'Why Wilkins'
                  : section === 'products'
                  ? 'Shop Now'
                  : section === 'challenge'
                  ? '7-Day Challenge'
                  : 'Contact'}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600"></span>
                )}
              </button>
            ))}
          </div>


          <div className="flex items-center space-x-4 sm:space-x-5 mr-2 sm:mr-4 md:mr-6">

            <button
              onClick={toggleCart}
              aria-label="Open Cart"
              className="relative text-gray-700 hover:text-cyan-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>


            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200 shadow-sm overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3 sm:px-4 py-2 space-y-1">
          {['home', 'benefits', 'wilkins', 'products', 'challenge', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-full text-left px-3 sm:px-4 py-2.5 rounded-md text-sm sm:text-base transition-colors ${
                activeSection === section
                  ? 'text-cyan-600 font-semibold bg-cyan-50'
                  : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
              }`}
            >
              {section === 'home'
                ? 'Home'
                : section === 'benefits'
                ? 'Health Benefits'
                : section === 'wilkins'
                ? 'Why Wilkins'
                : section === 'products'
                ? 'Shop Now'
                : section === 'challenge'
                ? '7-Day Challenge'
                : 'Contact'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
