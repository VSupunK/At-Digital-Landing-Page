import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  return (
    <nav className="bg-primary px-12 py-4 flex justify-between items-center text-white relative z-10">
      {/* Logo */}
      <img
        src={Logo}
        alt="logo"
        className="w-[226px] h-[49.62px] cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-10 max-sm:space-x-16 cursor-pointer">
        <a href="#" className="hover:text-secondary p-2 rounded">
          Services
        </a>
        <a href="#" className="hover:text-secondary p-2 rounded">
          About Us
        </a>
        <a href="#" className="hover:text-secondary p-2 rounded">
          Contact Us
        </a>
        <a href="#" className="hover:text-secondary p-2 rounded">
          Careers
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className={`md:hidden text-2xl focus:outline-none overflow-y-hidden z-20 ${
          isOpen ? "text-black" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white text-black flex flex-col items-start px-15 py-15 space-y-5 transition-transform duration-300 ease-in-out gap-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#"
          className="text-2xl  hover:text-secondary"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a
          href="#"
          className="text-2xl hover:text-secondary"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </a>
        <a
          href="#"
          className="text-2xl hover:text-secondary"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </a>
        <a
          href="#"
          className="text-2xl hover:text-secondary"
          onClick={() => setIsOpen(false)}
        >
          Careers
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
