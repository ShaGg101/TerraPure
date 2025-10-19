import React, { useState } from 'react';
import Modal from './Modal';

const HeroSection = () => {
  const [showChallengeModal, setShowChallengeModal] = useState(false);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startChallenge = () => {
    setShowChallengeModal(true);
  };

  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
 
          <div className="text-white space-y-6 sm:space-y-8">
            <div className="relative">
              <div className="absolute -top-8 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                Hydrate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Better.
                </span>
                <br />
                Live{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Healthier.
                </span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-100 leading-relaxed">
              Join thousands of Filipinos choosing pure, safe hydration with Wilkins Distilled Water.{' '}
              <span className="block mt-2 font-light">Your health starts with every drop.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button
                onClick={scrollToProducts}
                className="bg-white text-cyan-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Shop Wilkins Now
              </button>
              <button
                onClick={startChallenge}
                className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Start 7-Day Challenge
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-8 md:mt-0 scale-100 sm:scale-110 md:scale-125 lg:scale-150">
            <div className="water-animation">
              <svg
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] mx-auto purification-glow"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.1)" className="ripple" />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="rgba(255,255,255,0.15)"
                  className="ripple"
                  style={{ animationDelay: '0.5s' }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="rgba(255,255,255,0.2)"
                  className="ripple"
                  style={{ animationDelay: '1s' }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="rgba(255,255,255,0.3)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                />

                <circle cx="100" cy="40" r="4" fill="white" className="step-indicator" />
                <circle cx="142" cy="58" r="4" fill="white" className="step-indicator" />
                <circle cx="160" cy="100" r="4" fill="white" className="step-indicator" />
                <circle cx="142" cy="142" r="4" fill="white" className="step-indicator" />
                <circle cx="100" cy="160" r="4" fill="white" className="step-indicator" />
                <circle cx="58" cy="142" r="4" fill="white" className="step-indicator" />
                <circle cx="40" cy="100" r="4" fill="white" className="step-indicator" />
                <circle cx="58" cy="58" r="4" fill="white" className="step-indicator" />

                <path
                  d="M100 50 Q110 70, 100 90 Q90 110, 100 130 Q110 150, 100 170"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                  fill="none"
                  className="water-flow"
                />
                <path
                  d="M80 60 Q90 80, 80 100 Q70 120, 80 140"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  fill="none"
                  className="water-flow"
                  style={{ animationDelay: '1s' }}
                />
                <path
                  d="M120 60 Q110 80, 120 100 Q130 120, 120 140"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  fill="none"
                  className="water-flow"
                  style={{ animationDelay: '2s' }}
                />


                <path
                  d="M100 70 C115 85, 115 95, 100 110 C85 95, 85 85, 100 70 Z"
                  fill="white"
                  className="water-flow"
                />


                <circle
                  cx="90"
                  cy="80"
                  r="1.5"
                  fill="rgba(255,255,255,0.8)"
                  className="step-indicator"
                  style={{ animationDelay: '0.5s' }}
                />
                <circle
                  cx="110"
                  cy="85"
                  r="1"
                  fill="rgba(255,255,255,0.7)"
                  className="step-indicator"
                  style={{ animationDelay: '1.5s' }}
                />
                <circle
                  cx="95"
                  cy="105"
                  r="1.5"
                  fill="rgba(255,255,255,0.8)"
                  className="step-indicator"
                  style={{ animationDelay: '2.5s' }}
                />
                <circle
                  cx="105"
                  cy="110"
                  r="1"
                  fill="rgba(255,255,255,0.7)"
                  className="step-indicator"
                  style={{ animationDelay: '3.5s' }}
                />
              </svg>
            </div>


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white font-bold text-lg">8-Step</div>
              <div className="text-cyan-100">Purification</div>
            </div>
          </div>
        </div>
      </div>


      <Modal
        isOpen={showChallengeModal}
        onClose={() => setShowChallengeModal(false)}
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

export default HeroSection;
