import React from "react";
import SectionItem from "./SectionItem";
import Image_1 from "../assets/images/Computer.png";
import Image_2 from "../assets/images/Search.png";

const Sections = () => {
  return (
    <div id="services" className="lg:px-20 bg-white">
      <SectionItem
        image={Image_1}
        title={"Web & Mobile App Development"}
        description={
          "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        }
        reverse={false}
      />

      <SectionItem
        image={Image_2}
        title={"Digital Strategy Consulting"}
        description={
          "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        }
        reverse={true}
      />
    </div>
  );
};

export default Sections;
