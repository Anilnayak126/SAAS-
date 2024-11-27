// src/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when the main menu is closed on mobile
  useEffect(() => {
    if (!isOpen) {
      setIsDropdownOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 p-4 shadow-md bg-gray-900 text-white z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">My SaaS App</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="features" smooth={true} duration={500} className="hover:text-gray-400 transition duration-300 cursor-pointer transform hover:scale-105">Features</Link>
          <Link to="pricing" smooth={true} duration={500} className="hover:text-gray-400 transition duration-300 cursor-pointer transform hover:scale-105">Pricing</Link>
          
          {/* Resources Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-gray-400 transition duration-300 cursor-pointer transform hover:scale-105">
              Resources
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-800 mt-2 rounded-lg shadow-lg w-48 p-2">
                <Link to="blog" smooth={true} duration={500} className="block px-4 py-2 text-gray-300 hover:text-white">Blog</Link>
                <Link to="help-center" smooth={true} duration={500} className="block px-4 py-2 text-gray-300 hover:text-white">Help Center</Link>
                <Link to="documentation" smooth={true} duration={500} className="block px-4 py-2 text-gray-300 hover:text-white">Documentation</Link>
              </div>
            )}
          </div>

          <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 transition duration-300 cursor-pointer transform hover:scale-105">About Us</Link>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105">Sign In</button>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-3 bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <Link to="features" smooth={true} duration={500} className="block text-gray-300 hover:text-white transition duration-300 cursor-pointer transform hover:scale-105">Features</Link>
        <Link to="pricing" smooth={true} duration={500} className="block text-gray-300 hover:text-white transition duration-300 cursor-pointer transform hover:scale-105">Pricing</Link>
        
        {/* Resources Dropdown in Mobile */}
        <div className="block text-gray-300 hover:text-white transition duration-300 cursor-pointer transform hover:scale-105" onClick={toggleDropdown}>
          Resources
        </div>
        {isDropdownOpen && (
          <div className="pl-4 mt-2">
            <Link to="blog" smooth={true} duration={500} className="block text-gray-300 hover:text-white">Blog</Link>
            <Link to="help-center" smooth={true} duration={500} className="block text-gray-300 hover:text-white">Help Center</Link>
            <Link to="documentation" smooth={true} duration={500} className="block text-gray-300 hover:text-white">Documentation</Link>
          </div>
        )}

        <Link to="about" smooth={true} duration={500} className="block text-gray-300 hover:text-white transition duration-300 cursor-pointer transform hover:scale-105">About Us</Link>
        <button className="block w-full text-left text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mt-2 transition duration-300 transform hover:scale-105">Sign In</button>
        <button className="block w-full text-left text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg mt-2 transition duration-300 transform hover:scale-105">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
