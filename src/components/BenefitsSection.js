import React from 'react';
import muscle from '../images/muscle.png';
import brain from '../images/brain.png';
import health from '../images/health.png';


const BenefitsSection = () => {
  const benefits = [
    {
      img: brain,
      title: 'Better Focus',
      description: 'Proper hydration improves concentration and mental clarity by up to 23%'
    },
    {
      img: muscle,
      title: 'Enhanced Energy',
      description: 'Stay energized throughout the day with optimal hydration levels'
    },
    {
      img: health,
      title: 'Healthier Skin',
      description: 'Pure water helps maintain skin elasticity and natural glow'
    }
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Your Body Needs Pure Water
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Discover the life-changing benefits of proper hydration
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-5 sm:p-6 rounded-lg bg-gradient-to-b from-blue-50 to-cyan-50"
            >
              <div className="text-4xl mb-3 sm:mb-4"><img src={benefit.img} alt={benefit.title} className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" /></div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
