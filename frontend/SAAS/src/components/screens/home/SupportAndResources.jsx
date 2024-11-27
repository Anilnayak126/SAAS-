// src/SupportAndResources.jsx
import React from 'react';

const SupportAndResources = () => {
  return (
    <section className="bg-gray-900 text-white py-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Support and Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li>
                <a href="/support" className="text-blue-400 hover:text-blue-300 transition duration-300">Support Resources</a>
              </li>
              <li>
                <a href="/faqs" className="text-blue-400 hover:text-blue-300 transition duration-300">FAQs</a>
              </li>
              <li>
                <a href="/tutorials" className="text-blue-400 hover:text-blue-300 transition duration-300">Tutorials</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="/forum" className="text-blue-400 hover:text-blue-300 transition duration-300">User Forum</a>
              </li>
              <li>
                <a href="/feedback" className="text-blue-400 hover:text-blue-300 transition duration-300">Share Feedback</a>
              </li>
              <li>
                <a href="/resources" className="text-blue-400 hover:text-blue-300 transition duration-300">Additional Resources</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAndResources;
