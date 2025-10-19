import React from 'react';

const WilkinsSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: '8-Step Distillation Process',
      description: 'Advanced purification removes 99.9% of impurities and contaminants'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: 'Doctor Recommended',
      description: 'Trusted by healthcare professionals across the Philippines'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: 'International Standards',
      description: 'Meets both local and international safety certifications'
    }
  ];

  return (
    <section id="wilkins" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">Why Choose Wilkins?</h2>
            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-cyan-100 p-2 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-0">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="relative mb-4 flex items-center justify-center group">
                <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-cyan-300 rounded-full opacity-50 scale-0 group-hover:scale-100 group-hover:animate-ping transition-transform duration-300"></div>
                <div className="text-5xl sm:text-6xl relative z-10">💧</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Wilkins Distilled Water</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Pure. Safe. Trusted.</p>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 sm:p-4 rounded-lg">
                <div className="text-xs sm:text-sm">Available in</div>
                <div className="text-sm sm:text-base font-bold">350ml • 500ml • 1L • 6L</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WilkinsSection;
