import React from 'react';
import { useCart } from '../hooks/useCart';
import Modal from './Modal';

const CartModal = () => {
  const { items, isOpen, removeFromCart, increaseQuantity, decreaseQuantity, closeCart, getTotalPrice, clearCart } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = React.useState(false);
  const [paymentAmount, setPaymentAmount] = React.useState('');
  const [paymentError, setPaymentError] = React.useState('');
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [change, setChange] = React.useState(0);

  const checkout = () => {
    if (items.length === 0) return;
    const amount = parseFloat(paymentAmount);
    const total = getTotalPrice();
    
    if (!paymentAmount || isNaN(amount)) {
      setPaymentError('Please enter a valid payment amount');
      return;
    }
    
    if (amount < total) {
      setPaymentError(`Payment amount must be at least ₱${total}`);
      return;
    }
    
    setChange(amount - total);
    setPaymentError('');
    setShowCheckoutModal(true);
  };

  const handleCheckoutConfirm = () => {
    setShowCheckoutModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      clearCart();
      closeCart();
      setPaymentAmount('');
      setChange(0);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-3 sm:p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6 my-4">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h3>
            <button onClick={closeCart} className="text-gray-500 hover:text-gray-700 p-1">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 max-h-[50vh] overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 py-6 sm:py-8">
                <div className="text-3xl sm:text-4xl mb-2">🛒</div>
                <p className="text-sm sm:text-base">Your cart is empty</p>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-2.5 sm:p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm sm:text-base truncate">Wilkins {item.size}</div>
                      <div className="text-xs sm:text-sm text-gray-600">₱{item.price} each</div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.size)} 
                      className="text-red-500 hover:text-red-700 p-1 flex-shrink-0 ml-2"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.size)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-md font-semibold transition-colors text-base sm:text-lg"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm sm:text-base font-semibold text-gray-900 min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.size)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 rounded-md font-semibold transition-colors text-base sm:text-lg"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-sm sm:text-base text-cyan-600 whitespace-nowrap">
                      ₱{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t pt-3 sm:pt-4">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-semibold">Total:</span>
                <span className="text-xl sm:text-2xl font-bold text-cyan-600">₱{getTotalPrice()}</span>
              </div>
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Enter Payment Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base">₱</span>
                  <input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-sm sm:text-base"
                    placeholder="Enter amount"
                    min={getTotalPrice()}
                  />
                </div>
                {paymentError && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600">{paymentError}</p>
                )}
              </div>
              <button 
                onClick={checkout}
                className="w-full bg-cyan-600 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    <Modal
      isOpen={showCheckoutModal}
      onClose={() => setShowCheckoutModal(false)}
      title=" Checkout Summary"
      message={`Order Details:
${items.map(item => `• ${item.quantity}x Wilkins ${item.size}`).join('\n')}

Payment Summary:
• Total Amount: ₱${getTotalPrice()}
• Payment: ₱${paymentAmount}
• Change: ₱${change.toFixed(2)}

Confirm your order to proceed with payment.`}
      primaryAction={handleCheckoutConfirm}
      primaryActionText="Confirm Order"
    />
    <Modal
      isOpen={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
      title="✅ Order Successful!"
      message={`Thank you for your purchase!

Payment Details:
• Amount Paid: ₱${paymentAmount}
• Total Bill: ₱${getTotalPrice()}
• Change: ₱${change.toFixed(2)}

Your order will be delivered within 24 hours.
We'll send you updates via SMS.

Thank you for choosing TerraPure!`}
    />
    </>
  );
};

export default CartModal;
