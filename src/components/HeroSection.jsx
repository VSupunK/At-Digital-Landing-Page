import React from "react";
import HeroImage from "../assets/images/Hero image.jpeg";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="relative w-full h-screen flex items-center">
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
          className="bg-gradient-to-r from-[#1E90FF] to-[#00C896] text-white 
                 p-6 md:px-12 max-w-lg w-2/5 
                 md:absolute md:bottom-12 md:left-12 max-sm:hidden"
        >
          <h1
            className="lg:text-5xl md:text-3xl font-bold leading-tight mb-5 
                     text-wrap text-left overflow-hidden"
          >
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <div className="flex justify-center md:justify-start">
            <Button label={"Get free consultation"} />
          </div>
        </div>
      </section>

      {/* Hero Content - Media{768px}*/}
      <div
        className="bg-gradient-to-r from-[#1E90FF] to-[#00C896] text-white 
             p-6 md:px-12 w-full md:bottom-12 md:left-12 min-md:hidden"
      >
        <h1
          className="sm:text-3xl font-bold leading-tight mb-5 
                 text-wrap text-left"
        >
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <div className="flex justify-start">
          <Button label={"Get free consultation"} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
