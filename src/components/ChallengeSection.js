import React, { useState } from 'react';
import Modal from './Modal';

const ChallengeSection = () => {
  const [showModal, setShowModal] = useState(false);

  const joinChallenge = () => {
    setShowModal(true);
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
    <section id="challenge" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Join the 7-Day Hydration Challenge
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
          Transform your health with our guided hydration program
        </p>
        
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 sm:p-8 text-white mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Challenge Goal: 8 Glasses Daily</h3>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold">7</div>
              <div className="text-xs sm:text-sm md:text-base">Days</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">8</div>
              <div className="text-xs sm:text-sm md:text-base">Glasses/Day</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">2L</div>
              <div className="text-xs sm:text-sm md:text-base">Daily Target</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="bg-white p-5 sm:p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">What You'll Get:</h4>
            <ul className="text-left text-sm sm:text-base text-gray-600 space-y-2">
              {whatYouGet.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-5 sm:p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Expected Benefits:</h4>
            <ul className="text-left text-sm sm:text-base text-gray-600 space-y-2">
              {expectedBenefits.map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          onClick={joinChallenge}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-cyan-600 hover:to-blue-600 transition-colors w-full sm:w-auto"
        >
          Join Challenge Now - It's Free!
        </button>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to the Challenge!"
        message={`Congratulations on starting your wellness journey!

Your 7-Day Challenge Details:

    Daily Goals:
       •  Drink 8 glasses of water
       •  Reach 2L daily target
       •  Track your progress

    Program Benefits:
       •  Daily motivation tips
       •  Reminder notifications
       •  Community support
       •  Achievement badges

    Getting Started:
       •  Begin tomorrow morning
       •  Set regular reminders
       •  Update progress daily

You've got this! Every drop counts towards a healthier you.

Welcome to your hydration journey with Wilkins!`}
      />
    </section>
  );
};

export default ChallengeSection;
