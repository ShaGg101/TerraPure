import React from 'react';

const ChallengeSection = () => {
  const joinChallenge = () => {
    alert('🌟 Congratulations on joining the 7-Day Hydration Challenge!\n\nHere\'s what happens next:\n\n✓ Track your daily water intake\n✓ Get motivational reminders\n✓ Share your progress with the community\n✓ Win prizes for completing the challenge\n\nStart tomorrow with your first glass of Wilkins water!\n\nGood luck! 🍀');
  };

  const whatYouGet = [
    'Daily hydration reminders',
    'Progress tracking tools',
    'Health tips and motivation',
    'Community support'
  ];

  const expectedBenefits = [
    'Increased energy levels',
    'Better skin appearance',
    'Improved focus',
    'Enhanced overall wellness'
  ];

  return (
    <section id="challenge" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Join the 7-Day Hydration Challenge
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Transform your health with our guided hydration program
        </p>
        
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">Challenge Goal: 8 Glasses Daily</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">7</div>
              <div>Days</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8</div>
              <div>Glasses/Day</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2L</div>
              <div>Daily Target</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">What You'll Get:</h4>
            <ul className="text-left text-gray-600 space-y-2">
              {whatYouGet.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Expected Benefits:</h4>
            <ul className="text-left text-gray-600 space-y-2">
              {expectedBenefits.map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          onClick={joinChallenge}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-colors"
        >
          Join Challenge Now - It's Free!
        </button>
      </div>
    </section>
  );
};

export default ChallengeSection;
