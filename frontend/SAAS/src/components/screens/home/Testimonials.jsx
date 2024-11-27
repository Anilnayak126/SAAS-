// src/Testimonials.jsx
import React from 'react';

const testimonialsData = [
  {
    id: 1,
    quote: "This app transformed our workflow! We saw a 50% increase in efficiency within the first month.",
    name: "Jane Doe",
    position: "Operations Manager, TechCorp",
  },
  {
    id: 2,
    quote: "The real-time analytics feature has been a game-changer for our decision-making process.",
    name: "John Smith",
    position: "CEO, Innovate Solutions",
  },
  {
    id: 3,
    quote: "Excellent customer service and an intuitive interface. Highly recommend!",
    name: "Emily Johnson",
    position: "Marketing Director, Creative Agency",
  },
];

const successStories = [
  {
    id: 1,
    title: "TechCorp's Efficiency Boost",
    description: "After implementing our platform, TechCorp improved their operational efficiency by 50% in just one month, streamlining their processes and saving time.",
  },
  {
    id: 2,
    title: "Innovate Solutions' Strategic Insights",
    description: "Innovate Solutions leveraged our real-time analytics to make informed decisions, resulting in a significant increase in their sales performance.",
  },
  {
    id: 3,
    title: "Creative Agency's Client Satisfaction",
    description: "By using our app, Creative Agency enhanced their project management capabilities, leading to improved client satisfaction and repeat business.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6"> {/* Updated to match your body styles */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">What Our Customers Say</h2>
        
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {testimonialsData.map(({ id, quote, name, position }) => (
            <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">“{quote}”</p>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-400">{position}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Success Stories</h2>

        {/* Success Stories Section */}
        <div className="space-y-6">
          {successStories.map(({ id, title, description }) => (
            <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
