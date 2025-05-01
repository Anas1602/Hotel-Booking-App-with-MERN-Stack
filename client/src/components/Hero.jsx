import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center h-screen before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:z-0">
      <div className="relative z-10 max-w-2xl">
        <p className="inline-block bg-[#4989FF]/70 px-4 py-2 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all">
          The Ultimate Hotel Experience
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold mt-6 leading-tight text-shadow-lg">
          Discover Your Perfect Gateway Destination
        </h1>
        <p className="max-w-lg mt-4 text-sm md:text-base leading-relaxed text-white/90 font-light">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>
      </div>

      {/* Form */}
      <form className="relative z-10 bg-white text-gray-700 rounded-2xl px-6 py-8 mt-8 flex flex-col md:flex-row max-md:items-start gap-6 shadow-2xl backdrop-blur-sm border border-white/20 w-full max-w-4xl">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <img src={assets.calenderIcon} alt="calendar" className="h-5 w-5" />
            <label
              htmlFor="destinationInput"
              className="font-medium text-gray-800">
              Destination
            </label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="Where are you going?"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <img src={assets.calenderIcon} alt="" className="h-5 w-5" />
            <label htmlFor="checkIn" className="font-medium text-gray-800">
              Check in
            </label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <img src={assets.calenderIcon} alt="" className="h-5 w-5" />
            <label htmlFor="checkOut" className="font-medium text-gray-800">
              Check out
            </label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="w-full md:w-28">
          <div className="flex items-center gap-2 mb-2">
            <label htmlFor="guests" className="font-medium text-gray-800">
              Guests
            </label>
          </div>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            placeholder="1"
          />
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dull py-4 px-6 text-white font-bold my-auto cursor-pointer max-md:w-full shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all">
          <img src={assets.searchIcon} alt="searchIcon" className="h-5 w-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
