import React from "react";
import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
