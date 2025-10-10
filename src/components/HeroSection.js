import React from 'react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startChallenge = () => {
    alert('🎉 Welcome to the 7-Day Hydration Challenge!\n\nYour journey to better health starts now. We\'ll send you daily reminders and tips to help you reach your hydration goals.\n\nRemember: 8 glasses of Wilkins water daily for 7 days!\n\nLet\'s do this together! 💪');
  };

  return (
    <section id="home" className="gradient-bg pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">
              Hydrate Better.<br />Live Healthier.
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Join thousands of Filipinos choosing pure, safe hydration with Wilkins Distilled Water. 
              Your health starts with every drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProducts}
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Wilkins Now
              </button>
              <button 
                onClick={startChallenge}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Start 7-Day Challenge
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="water-animation">
              <svg className="w-80 h-80 mx-auto purification-glow" viewBox="0 0 200 200" fill="none">
                {/* Outer ripple circles */}
                <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.1)" className="ripple"/>
                <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.15)" className="ripple" style={{animationDelay: '0.5s'}}/>
                <circle cx="100" cy="100" r="70" fill="rgba(255,255,255,0.2)" className="ripple" style={{animationDelay: '1s'}}/>
                
                {/* Main container circle */}
                <circle cx="100" cy="100" r="60" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                
                {/* 8 Step indicators around the circle */}
                <circle cx="100" cy="40" r="4" fill="white" className="step-indicator"/>
                <circle cx="142" cy="58" r="4" fill="white" className="step-indicator"/>
                <circle cx="160" cy="100" r="4" fill="white" className="step-indicator"/>
                <circle cx="142" cy="142" r="4" fill="white" className="step-indicator"/>
                <circle cx="100" cy="160" r="4" fill="white" className="step-indicator"/>
                <circle cx="58" cy="142" r="4" fill="white" className="step-indicator"/>
                <circle cx="40" cy="100" r="4" fill="white" className="step-indicator"/>
                <circle cx="58" cy="58" r="4" fill="white" className="step-indicator"/>
                
                {/* Water flow lines */}
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
                  style={{animationDelay: '1s'}}
                />
                <path 
                  d="M120 60 Q110 80, 120 100 Q130 120, 120 140" 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  className="water-flow" 
                  style={{animationDelay: '2s'}}
                />
                
                {/* Central water drop */}
                <path d="M100 70 C115 85, 115 95, 100 110 C85 95, 85 85, 100 70 Z" fill="white" className="water-flow"/>
                
                {/* Purification particles */}
                <circle cx="90" cy="80" r="1.5" fill="rgba(255,255,255,0.8)" className="step-indicator" style={{animationDelay: '0.5s'}}/>
                <circle cx="110" cy="85" r="1" fill="rgba(255,255,255,0.7)" className="step-indicator" style={{animationDelay: '1.5s'}}/>
                <circle cx="95" cy="105" r="1.5" fill="rgba(255,255,255,0.8)" className="step-indicator" style={{animationDelay: '2.5s'}}/>
                <circle cx="105" cy="110" r="1" fill="rgba(255,255,255,0.7)" className="step-indicator" style={{animationDelay: '3.5s'}}/>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white font-bold text-lg">8-Step</div>
              <div className="text-cyan-100">Purification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
