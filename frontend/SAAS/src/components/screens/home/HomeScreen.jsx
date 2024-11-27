// src/HeroSection.jsx
import React from 'react';
import Navbar from '../../Navbar';

const HeroSection = () => {
  return (
    <>
   <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 text-center">
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate-slide-up">
        Transform Your Business with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-purple-500">
          Real-Time Insights
        </span>
      </h1>
      
      {/* Subheading */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 animate-fade-in">
        Monitor, analyze, and optimize your operations in real-time. Our solution helps you streamline processes, boost productivity, and make data-driven decisions.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300 animate-pulse">
          Get Started
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition duration-300">
          Try for Free
        </button>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
