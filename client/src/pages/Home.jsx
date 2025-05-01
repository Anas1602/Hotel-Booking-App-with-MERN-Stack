import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonials />
      <div className="bg-white py-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
