import React from 'react';

const Modal = ({ isOpen, onClose, title, message, primaryAction, primaryActionText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-md w-full p-5 sm:p-6 shadow-xl my-4 max-h-[90vh] overflow-y-auto relative">
        <div className="mb-4 pr-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="mb-5 sm:mb-6 text-sm sm:text-base text-gray-600 whitespace-pre-line">
          {message}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base order-2 sm:order-1"
          >
            Close
          </button>
          {primaryAction && (
            <button
              onClick={() => {
                primaryAction();
                onClose();
              }}
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors text-sm sm:text-base order-1 sm:order-2"
            >
              {primaryActionText || 'OK'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;