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
        <p className="font-semibold sm:text-lg">{question}</p>
        <span className="p-2">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-2 text-dark"> {answer}</p>}
    </div>
  );
};

export default FAQItem;
