import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-dashed bg-accent-white border-primary p-4 my-4 rounded-md">
      <div
        className={`flex justify-between items-center font-semibold transition-colors cursor-pointer ${
          isOpen ? "text-primary" : "text-black"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-semibold max-sm:text-sm text-xl">{question}</p>
        <span className="p-2 text-3xl transition">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <p className="mt-2 max-sm:text-sm text-xl text-text-light"> {answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
