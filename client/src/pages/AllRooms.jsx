import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-3 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        className="w-4 h-4 accent-primary"
      />
      <span className="font-light select-none text-gray-600"> {label} </span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-3 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
        className="w-4 h-4 accent-primary"
      />
      <span className="font-light select-none text-gray-600"> {label} </span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();

  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  return (
    <div className="py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col items-start text-left mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Flex container for sidebar and rooms list */}
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8">
          {/* Left Side - Room Listings */}
          <div className="w-full lg:w-3/4">
            {roomsDummyData.map((room) => (
              <div
                key={room._id}
                className="flex flex-col md:flex-row items-start py-10 gap-8 border-b border-gray-200 last:pb-20 last:border-0 bg-white rounded-2xl shadow-sm mb-8 p-6 md:p-8 hover:shadow-md transition-shadow">
                <img
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  src={room.images[0]}
                  alt="hotelImg"
                  title="View Room Details"
                  className="max-h-72 w-full md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer hover:scale-105 duration-500 transition-transform"
                />

                <div className="md:w-1/2 flex flex-col gap-3">
                  <p className="text-gray-500 font-medium">{room.hotel.city}</p>
                  <p
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      scrollTo(0, 0);
                    }}
                    className="text-3xl font-playfair font-bold cursor-pointer hover:text-primary transition-colors">
                    {room.hotel.name}
                  </p>

                  <div className="flex items-center">
                    <StarRating />
                    <p className="ml-2 text-gray-600 font-medium">
                      200+ Reviews
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                    <img
                      src={assets.locationIcon}
                      alt="locationIcon"
                      className="w-5 h-5"
                    />
                    <span>{room.hotel.address}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap items-center mt-4 mb-6 gap-3">
                    {room.amenities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm">
                        <img
                          src={facilityIcons[item]}
                          alt={item}
                          className="w-5 h-5"
                        />
                        <p className="text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Room Price per night */}
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl font-bold text-primary">
                      ${room.pricePerNight}
                      <span className="text-lg font-normal text-gray-600">
                        {" "}
                        / night
                      </span>
                    </p>
                    <button
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        scrollTo(0, 0);
                      }}
                      className="px-6 py-2 rounded-lg text-white bg-primary hover:bg-primary-dull transition-all font-bold shadow-md hover:shadow-primary/30 transform hover:-translate-y-1 active:scale-95">
                      View Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Filters */}
          <div className="w-full lg:w-1/4 bg-white rounded-2xl shadow-sm border border-gray-100 text-gray-600 max-lg:mb-8 sticky top-32">
            <div
              className={`flex items-center justify-between px-6 py-4 ${
                openFilters && "border-b"
              } border-gray-200`}>
              <p className="text-lg font-playfair font-bold text-gray-800">
                FILTERS
              </p>

              <div className="text-xs font-medium cursor-pointer text-primary">
                <span
                  onClick={() => setOpenFilters(!openFilters)}
                  className="lg:hidden">
                  {openFilters ? "HIDE" : "SHOW"}
                </span>
                <span
                  onClick={() => {
                    // Add your clear filters logic here
                  }}
                  className="hidden lg:block hover:underline">
                  CLEAR
                </span>
              </div>
            </div>

            <div
              className={`${
                openFilters
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0 lg:max-h-screen lg:opacity-100"
              } overflow-hidden transition-all duration-300 ease-in-out`}>
              <div className="px-6 pt-6">
                <p className="font-medium text-gray-800 pb-3 border-b border-gray-100">
                  Popular Filters
                </p>
                {roomTypes.map((room, index) => (
                  <CheckBox key={index} label={room} />
                ))}
              </div>
              <div className="px-6 pt-6">
                <p className="font-medium text-gray-800 pb-3 border-b border-gray-100">
                  Price Range
                </p>
                {priceRanges.map((range, index) => (
                  <CheckBox key={index} label={`$ ${range}`} />
                ))}
              </div>
              <div className="px-6 pt-6 pb-8">
                <p className="font-medium text-gray-800 pb-3 border-b border-gray-100">
                  Sort By
                </p>
                {sortOptions.map((option, index) => (
                  <RadioButton key={index} label={option} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
