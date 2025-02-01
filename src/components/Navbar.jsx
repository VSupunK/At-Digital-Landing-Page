import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 flex justify-between items-center text-white">
      <img
        src={Logo}
        alt="logo"
        className="w-[226px] h-[49.62px] cursor-pointer"
      />
      <ul className="flex space-x-6 cursor-pointer">
        <li className="hover:bg-secondary hover:drop-shadow-l p-2 rounded">
          Services
        </li>
        <li className="hover:bg-secondary hover:drop-shadow-l p-2 rounded">
          About Us
        </li>
        <li className="hover:bg-secondary hover:drop-shadow-l p-2 rounded">
          Contact Us
        </li>
        <li className="hover:bg-secondary hover:drop-shadow-l p-2 rounded">
          Careers
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
