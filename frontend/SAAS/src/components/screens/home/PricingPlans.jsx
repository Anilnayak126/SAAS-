// src/PricingPlans.jsx
import React from 'react';

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$19/month",
    features: [
      "Real-time Analytics",
      "Basic Data Processing",
      "Email Support",
      "1 User License",
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    price: "$49/month",
    features: [
      "Advanced Analytics",
      "Full Data Processing",
      "Priority Email Support",
      "Up to 5 User Licenses",
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    price: "$99/month",
    features: [
      "Custom Analytics Solutions",
      "Dedicated Support",
      "Unlimited User Licenses",
      "24/7 Support",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Pricing Plans</h2>
        <p className="text-lg sm:text-xl mb-12">
          Choose the plan that's right for you. Start with a free trial!
        </p>

        {/* Pricing Plans Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingPlans.map(({ id, title, price, features }) => (
            <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-2xl font-semibold mb-4">{price}</p>
              <h4 className="text-lg font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-300">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
