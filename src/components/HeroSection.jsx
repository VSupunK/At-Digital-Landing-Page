import React from "react";
import HeroImage from "../assets/images/Hero image.jpeg";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div
        className="relative max-w-3xl p-6 md:px-12 bg-gradient-to-r from-[#1E90FF] to-[#00C896] 
                      text-white lg:absolute lg:bottom-12 lg:left-12"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>

        <Button />
      </div>
    </section>
  );
};

export default HeroSection;
