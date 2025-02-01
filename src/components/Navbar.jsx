import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary px-10 py-4 flex justify-between items-center text-white">
      <img
        src={Logo}
        alt="logo"
        className="w-[226px] h-[49.62px] cursor-pointer"
      />

      <div className="flex space-x-10 cursor-pointer gap-4">
        <a
          href="#"
          className="hover:text-secondary hover:drop-shadow-l p-2 rounded"
        >
          Services
        </a>
        <a
          href="#"
          className="hover:text-secondary hover:drop-shadow-l p-2 rounded"
        >
          About Us
        </a>
        <a
          href="#"
          className="hover:text-secondary hover:drop-shadow-l p-2 rounded"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="hover:text-secondary hover:drop-shadow-l p-2 rounded"
        >
          Careers
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
