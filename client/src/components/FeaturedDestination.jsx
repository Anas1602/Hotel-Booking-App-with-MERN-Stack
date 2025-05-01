import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-4xl mx-auto text-center">
        <Title
          title="Featured Destinations"
          subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="mt-16 px-8 py-3 text-base font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1">
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
