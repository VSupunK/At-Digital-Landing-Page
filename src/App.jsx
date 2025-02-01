import React from "react";
import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Sections />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
