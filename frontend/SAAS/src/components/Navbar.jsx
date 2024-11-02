
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 shadow-md bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My SaaS App</div>
        <div className="hidden md:flex space-x-4">
          <a href="#features" className="text-white hover:text-gray-300">Features</a>
          <a href="#pricing" className="text-white hover:text-gray-300">Pricing</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded">Sign In</button>
          <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded">Sign Up</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#features" className="block text-white hover:text-gray-300">Features</a>
          <a href="#pricing" className="block text-white hover:text-gray-300">Pricing</a>
          <a href="#contact" className="block text-white hover:text-gray-300">Contact</a>
          <button className="block w-full text-left text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded">Sign In</button>
          <button className="block w-full text-left text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded">Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;