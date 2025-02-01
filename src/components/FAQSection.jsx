import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => (
  <div className="p-6 space-y-5 px-12">
    <h1 className="text-4xl sm:text-2xl font-bold text-center text-primary overflow-hidden pb-2">
      Frequently asked questions
    </h1>
    <FAQItem
      question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
      answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    />

    <FAQItem
      question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
      answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    />

    <FAQItem
      question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
      answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    />
  </div>
);

export default FAQSection;
