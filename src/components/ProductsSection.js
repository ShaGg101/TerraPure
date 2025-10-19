import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import Modal from './Modal';
import delivery from '../images/delivery.png';
import box from '../images/boxes.png';
import sameday from '../images/same-day.png';

const ProductsSection = () => {
  const { addToCart } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const products = [
    {
      size: '350ml',
      price: 15,
      description: 'Perfect for on-the-go hydration',
      features: ['8-step purification', 'Portable size', 'BPA-free bottle'],
      popular: false
    },
    {
      size: '500ml',
      price: 20,
      description: 'Most popular choice',
      features: ['8-step purification', 'Ideal daily portion', 'Eco-friendly packaging'],
      popular: true
    },
    {
      size: '1L',
      price: 35,
      description: 'Great for families',
      features: ['8-step purification', 'Family size', 'Better value'],
      popular: false
    },
    {
      size: '6L',
      price: 180,
      description: 'Best value for offices',
      features: ['8-step purification', 'Office/home use', 'Maximum savings'],
      popular: false
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    setShowCartModal(true);
  };

  const contactBulk = () => {
    setShowBulkModal(true);
  };

  return (
    <section id="products" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Shop Wilkins Distilled Water</h2>
          <p className="text-lg sm:text-xl text-gray-600">Choose the perfect size for your hydration needs</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow relative">
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  POPULAR
                </div>
              )}
              
              <div className="text-center mb-4 sm:mb-6">
                <div className="relative mb-3 sm:mb-4 flex items-center justify-center">
                  <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-cyan-300 rounded-full opacity-50 animate-ping"></div>
                  <div className="text-5xl sm:text-6xl relative z-10">💧</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Wilkins {product.size}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-600">₱{product.price}</div>
                  <div className="text-gray-500 text-sm">per {product.size === '6L' ? 'container' : 'bottle'}</div>
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>✓ {feature}</div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-cyan-600 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Bulk Orders & Delivery</h3>
            <p className="text-sm sm:text-base text-gray-600">Perfect for offices, schools, and events</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
               <img src={delivery} alt="Free Delivery" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Free Delivery</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Orders over ₱1,000 within Metro Manila</p>
            </div>
            <div className="text-center">
              <img src={box} alt="Bulk Discounts" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Bulk Discounts</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Save up to 15% on large orders</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3"><img src={sameday} alt="Same Day Delivery" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3" /></div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Same Day Delivery</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Order before 2PM for same-day delivery</p>
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <button 
              onClick={contactBulk}
              className="bg-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-700 transition-colors w-full sm:w-auto"
            >
              Contact for Bulk Orders
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showCartModal}
        onClose={() => setShowCartModal(false)}
        title="Added to Cart"
        message={addedProduct ? `🛒 Wilkins ${addedProduct.size} added to cart!

Click the shopping cart icon above to:
✓ View your items
✓ Adjust quantities
✓ Proceed to checkout` : ''}
      />
      <Modal
        isOpen={showBulkModal}
        onClose={() => setShowBulkModal(false)}
        title="Bulk Order Contact"
        message={`📦 For Bulk Orders and Special Pricing:

📧 Email: bulk@terrapure.ph
📞 Phone: (02) 8123-4567
📱 WhatsApp: +63 917 123 4567

Our team will contact you within 24 hours with:
✓ Custom pricing quote
✓ Delivery schedule
✓ Special bulk discounts"
      `}/>
    </section>
  );
};

export default ProductsSection;
