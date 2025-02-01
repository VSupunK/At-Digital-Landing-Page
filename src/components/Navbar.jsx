import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 flex justify-between items-center text-white">
      <img src={Logo} alt="logo" className="w-50" />
      <ul className="flex space-x-6">
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
    </nav>
  );
};

export default Navbar;
