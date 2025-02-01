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
      <ul className="flex space-x-10 cursor-pointer gap-4">
        <li className="hover:text-secondary hover:drop-shadow-l p-2 rounded">
          Services
        </li>
        <li className="hover:text-secondary hover:drop-shadow-l p-2 rounded">
          About Us
        </li>
        <li className="hover:text-secondary hover:drop-shadow-l p-2 rounded">
          Contact Us
        </li>
        <li className="hover:text-secondary hover:drop-shadow-l p-2 rounded">
          Careers
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
