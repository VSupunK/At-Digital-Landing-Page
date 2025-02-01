import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => (
  <div className="p-6 space-y-5 px-12">
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
