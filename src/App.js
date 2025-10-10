import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import WilkinsSection from './components/WilkinsSection';
import ProductsSection from './components/ProductsSection';
import ChallengeSection from './components/ChallengeSection';
import StatisticsSection from './components/StatisticsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './hooks/useCart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App bg-gray-50">
        <Navigation />
        <HeroSection />
        <BenefitsSection />
        <WilkinsSection />
        <ProductsSection />
        <ChallengeSection />
        <StatisticsSection />
        <ContactSection />
        <Footer />
        <CartModal />
      </div>
    </CartProvider>
  );
}

export default App;
