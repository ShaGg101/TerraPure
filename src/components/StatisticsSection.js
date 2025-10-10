import React from 'react';

const StatisticsSection = () => {
  const statistics = [
    {
      percentage: '75%',
      description: 'of Filipinos are chronically dehydrated'
    },
    {
      percentage: '40%',
      description: 'consume sugary drinks daily'
    },
    {
      percentage: '23%',
      description: 'improvement in focus with proper hydration'
    },
    {
      percentage: '50M+',
      description: 'Filipinos trust Wilkins Water'
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Hydration Crisis in the Philippines</h2>
          <p className="text-gray-300">Why switching to water matters more than ever</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.percentage}</div>
              <div className="text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
