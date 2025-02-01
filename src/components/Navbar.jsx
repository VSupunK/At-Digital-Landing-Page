import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="home"
      className="bg-primary px-12 py-4 flex justify-between items-center text-white relative z-10"
    >
      {/* Logo */}
      <a href="#home">
        <img
          src={Logo}
          alt="logo"
          className="w-[226px] h-[49.62px] cursor-pointer"
        />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-xl space-x-10 cursor-pointer uppercase">
        <a href="#services" className="hover:text-secondary p-2 rounded">
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
        className="md:hidden text-2xl focus:outline-none z-20 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX className="hidden" /> : <FiMenu />}
      </button>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white text-black flex flex-col px-10 py-15 space-y-5 transition-transform duration-300 ease-in-out gap-4 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button (Fixed) */}
        <button
          className="absolute top-5 right-5 text-3xl text-black z-50"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        <a
          href="#services"
          className="text-2xl hover:text-secondary"
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
