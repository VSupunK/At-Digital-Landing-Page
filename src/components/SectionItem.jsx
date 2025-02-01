import React from "react";
import Button from "./Button";

const SectionItem = ({ image, title, description, reverse }) => {
  return (
    <section
      className={`flex flex-col sm:flex-row items-center justify-center px-6 gap-4 text-center sm:text-left
        ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"}`}
    >
      <div className="md:w-2/5">
        <img
          src={image}
          alt="section image"
          className="sm:w-full sm:h-auto justify-center items-center"
        />
      </div>

      <div className="flex flex-col gap-4 md:items-start md:w-3/5">
        <h1 className="text-3xl max-md:text-2xl pb-2 font-bold overflow-hidden text-primary">
          {title}
        </h1>
        <p className="text-xl max-md:text-lg md:text-left">{description}</p>
        <Button label={"Learn More"} />
      </div>
    </section>
  );
};

export default SectionItem;
