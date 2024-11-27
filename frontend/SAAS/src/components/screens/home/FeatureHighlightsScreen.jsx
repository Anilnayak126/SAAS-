// src/FeatureHighlights.jsx
import React from 'react';
import { FaChartLine, FaUserFriends, FaDesktop } from 'react-icons/fa';

const FeatureHighlights = () => {
  return (
    <div className="py-10 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-slide-in">
        Feature Highlights
      </h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        
        {/* Real-Time Analytics */}
        <div className="flex flex-col items-center text-center animate-fade-in">
          <FaChartLine className="text-blue-400 text-6xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
          <p className="text-gray-300">
            Get live data insights to make informed decisions instantly with powerful, real-time analytics.
          </p>
        </div>
        
        {/* User-Friendly Dashboard */}
        <div className="flex flex-col items-center text-center animate-fade-in-delayed">
          <FaDesktop className="text-green-400 text-6xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">User-Friendly Dashboard</h3>
          <p className="text-gray-300">
            Navigate seamlessly with an intuitive, streamlined dashboard designed for ease of use.
          </p>
        </div>
        
        {/* Collaboration Tools */}
        <div className="flex flex-col items-center text-center animate-slide-in">
          <FaUserFriends className="text-purple-400 text-6xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collaboration Tools</h3>
          <p className="text-gray-300">
            Enable team collaboration with shared reports, real-time notifications, and seamless teamwork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
