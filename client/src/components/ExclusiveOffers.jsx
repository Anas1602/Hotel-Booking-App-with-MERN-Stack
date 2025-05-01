import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <Title
            align="left"
            title="Exclusive Offers"
            subTitle="Take advantage of our limited time offers and special packages to enhance your stay and create unforgettable memories"
          />
        </div>

        <button className="group flex items-center gap-2 font-bold text-primary hover:text-primary-dull cursor-pointer max-md:mt-8 px-6 py-2 rounded-lg hover:bg-primary/5 transition-all">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-2 transition-all"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl mx-auto">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-16 md:pt-20 px-8 pb-6 rounded-2xl text-white bg-no-repeat bg-cover bg-center h-96 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${item.image})`,
            }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

            <p className="absolute top-4 left-4 px-4 py-2 text-sm bg-orange-500 text-white font-bold rounded-full shadow-lg z-10 transform group-hover:scale-110 transition-transform">
              {item.priceOff}% OFF
            </p>

            <div className="relative z-10 mt-auto">
              <p className="text-3xl font-bold font-playfair mb-3 group-hover:text-primary-dull transition-colors">
                {item.title}
              </p>
              <p className="text-white/90 text-sm md:text-base">
                {item.description}
              </p>
              <p className="text-xs text-white/70 mt-4 font-medium">
                Expires {item.expiryDate}
              </p>
            </div>

            <button className="relative z-10 flex items-center gap-2 font-medium cursor-pointer mt-6 mb-2 group-hover:text-primary-dull transition-colors">
              View Offers{" "}
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="invert group-hover:translate-x-2 transition-all"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
