import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#6F6A42] text-[#EFE8C2] py-12 px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo and Social Media Section */}
        <div>
       <Link  to="/"> <h2 className="text-2xl font-bold mb-10">LOGO</h2></Link>
          <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
          <div className="flex space-x-4">
            <FaTwitter className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2">
         <Link to = "/product"><li className="hover:underline cursor-pointer">Products</li></Link>   
            <li className="hover:underline cursor-pointer">Overview</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">Releases</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2">
           <Link to="/about"> <li className="hover:underline cursor-pointer">About Us</li></Link>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">News</li>
            <li className="hover:underline cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Stay Up to Date Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">STAY UP TO DATE</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-[#6F6A42] border border-[#EFE8C2] text-white placeholder-white flex-1"
            />
            <button className="bg-[#EFE8C2] text-black px-4 py-2 font-semibold hover:bg-[#e4d291]">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="container mx-auto mt-8 flex items-center justify-center">
        <div className="w-3/4 border-t-2 border-[#EFE8C2]"></div>
        <div className="flex space-x-4 pl-4 text-lg">
          <span className="cursor-pointer hover:underline">Terms</span>
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span className="cursor-pointer hover:underline">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
