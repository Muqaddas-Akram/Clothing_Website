import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-transparent p-6">
      <header className="flex justify-between items-center h-20">
        {/* Logo */}
       <Link to="/" ><div className="text-[#2c5545] text-2xl font-bold ml-4 md:ml-40">LOGO</div></Link> 
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-[#2c5545] font-semibold hover:underline">HOME</a>
          <a href="/product" className="text-[#2c5545] font-semibold hover:underline">SHOP</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">FEATURES</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">CONTACT</a>
        </nav>

        {/* Icons and Login Button */}
        <div className="flex items-center space-x-4 md:space-x-20 mr-4 md:mr-40">
       <Link to="/productdetail"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2c5545]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg></Link>   
         <Link to="/login"><button className="bg-transparent text-[#2c5545] px-4 py-2 rounded border border-[#2c5545]">
            LOGIN
          </button></Link> 
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[#2c5545]">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col space-y-4 mt-4 md:hidden">
          <a href="/" className="text-[#2c5545] font-semibold hover:underline">HOME</a>
          <a href="/product" className="text-[#2c5545] font-semibold hover:underline">SHOP</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">FEATURES</a>
          <a href="#" className="text-[#2c5545] font-semibold hover:underline">CONTACT</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
