import React from "react";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <footer className="bg-primary text-white px-12 py-10 mt-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Logo and Description */}
      <div className="md:col-span-6 lg:col-span-8 text-left text-wrap overflow-hidden">
        <img
          src={Logo}
          alt="logo"
          className="w-[180px] md:w-[226px] h-auto cursor-pointer"
        />
        <p className="max-sm:text-sm text-xl mt-3 text-left text-wrap md:w-[75%] w-full">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achieve a single objective – your
          business results.
        </p>
      </div>

      <div className="md:col-span-6 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Our Technologies */}
        <div className="text-left">
          <h2 className="max-sm:text-sm text-xl font-semibold mb-2">
            Our Technologies
          </h2>
          <ul className="max-sm:text-sm text-lg space-y-1 cursor-pointer">
            <li className="hover:text-secondary">ReactJS</li>
            <li className="hover:text-secondary">Gatsby</li>
            <li className="hover:text-secondary">NextJS</li>
            <li className="hover:text-secondary">NodeJS</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-left">
          <h2 className="max-sm:text-sm text-xl font-semibold mb-2">
            Our Services
          </h2>
          <ul className="max-sm:text-sm text-lg space-y-1 cursor-pointer">
            <li className="hover:text-secondary">Social Media Marketing</li>
            <li className="hover:text-secondary">
              Web & Mobile App Development
            </li>
            <li className="hover:text-secondary">Data & Analytics</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr className="w-3/4 md:w-1/2 my-6 border-gray-400 mx-auto" />

    <p className="max-sm:text-sm text-xl text-center">
      Privacy Policy | Terms & Conditions
    </p>
  </footer>
);

export default Footer;
