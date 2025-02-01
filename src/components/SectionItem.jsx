import React from "react";
import Button from "./Button";

const SectionItem = ({ image, title, description, reverse }) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center px-12 gap-2 md:gap-6 md:py-10 xl:py-5 text-center sm:text-left
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="md:w-2/5">
        <img
          src={image}
          alt="section image"
          className="max-sm:w-2xs sm:w-full h-auto justify-center items-center"
        />
      </div>

      <div className="flex flex-col gap-4 md:items-start md:w-3/5">
        <h1 className="text-3xl max-md:text-2xl pb-2 font-bold overflow-hidden text-primary">
          {title}
        </h1>
        <p className="max-sm:text-sm text-xl max-md:text-lg md:text-left">
          {description}
        </p>
        <Button label={"Learn More"} />
      </div>
    </section>
  );
};

export default SectionItem;
