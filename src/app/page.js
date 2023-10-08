import React from "react";
import Hero from "@/components/_Components/Hero/Hero";
import AdBox1 from "@/components/_Components/Hero/AdBox1";

const Homepage = () => {
  return (
    <>
      <div className="md:px-20 2xl:px-30">
        <Hero />
        <AdBox1 />
      </div>
    </>
  );
};

export default Homepage;
