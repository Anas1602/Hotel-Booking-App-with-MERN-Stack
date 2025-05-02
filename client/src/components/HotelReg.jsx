import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <form className="flex bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 hidden md:block object-cover"
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-6 right-6 h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
          />

          <h2 className="font-playfair text-3xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-6 mt-4 text-center">
            Register Your Hotel
          </h2>

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label
              htmlFor="name"
              className="font-medium text-gray-600 block mb-1">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type Here"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="w-full mt-5">
            <label
              htmlFor="contact"
              className="font-medium text-gray-600 block mb-1">
              Phone
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Type Here"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light"
              required
            />
          </div>

          {/* address */}
          <div className="w-full mt-5">
            <label
              htmlFor="address"
              className="font-medium text-gray-600 block mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type Here"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light"
              required
            />
          </div>

          {/* Select city Dropdown */}
          <div className="w-full mt-5">
            <label
              className="font-medium text-gray-600 block mb-1"
              htmlFor="city">
              City
            </label>
            <select
              name="city"
              id="city"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-light appearance-none bg-white"
              required>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white mt-8 px-8 py-3 rounded-lg cursor-pointer font-bold shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 w-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
