import React from "react";
import HeroImage from "../assets/images/Hero image.jpeg";
import Button from "./Button";
import HeroContent from "./HeroContent";

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
      <div className="relative w-full h-full flex items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
