import React from "react";
import Button from "./Button";

const HeroContent = () => {
  return (
    <div
      className="relative w-full p-6 md:px-12 bg-gradient-to-r from-[#1E90FF] to-[#00C896] 
                   text-white lg:absolute lg:bottom-12 lg:left-12 md:rounded-md"
    >
      <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-5">
        We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </h1>

      <Button label={"GET FREE CONSULTATION"} />
    </div>
  );
};

export default HeroContent;
