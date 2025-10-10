import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const totalItems = getTotalItems();

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-cyan-600">TerraPure</div>
            <div className="ml-2 text-sm text-gray-600">Hydrate Better. Live Healthier.</div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Health Benefits
            </button>
            <button onClick={() => scrollToSection('wilkins')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Why Wilkins
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Shop Now
            </button>
            <button onClick={() => scrollToSection('challenge')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              7-Day Challenge
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={toggleCart} className="relative text-gray-700 hover:text-cyan-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"></path>
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-gray-700"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">
              Health Benefits
            </button>
            <button onClick={() => scrollToSection('wilkins')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">
              Why Wilkins
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">
              Shop Now
            </button>
            <button onClick={() => scrollToSection('challenge')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">
              7-Day Challenge
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
