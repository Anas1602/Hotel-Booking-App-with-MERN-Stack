/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
        {/* Room Details - Added container with subtle shadow and rounded corners */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                {room.hotel.name}{" "}
                <span className="font-inter text-sm text-gray-600 ml-2">
                  ({room.roomType})
                </span>
              </h1>

              {/* Room Ratings - Improved spacing and alignment */}
              <div className="flex items-center gap-2 mt-3">
                <StarRating />
                <p className="ml-1 text-gray-600 font-medium">200+ Reviews</p>
              </div>

              {/* Room Address - Improved icon alignment */}
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <img
                  src={assets.locationIcon}
                  alt="location"
                  className="w-5 h-5"
                />
                <span className="text-sm">{room.hotel.address}</span>
              </div>
            </div>

            {/* Discount badge - Made more prominent */}
            <p className="text-sm font-inter py-2 px-4 text-white bg-orange-500 rounded-full font-bold shadow-md transform hover:scale-105 transition-transform mt-4 md:mt-0">
              20% OFF
            </p>
          </div>

          {/* Room Images - Improved layout and hover effects */}
          <div className="flex flex-col lg:flex-row mt-8 gap-6">
            {/* main image */}
            <div className="lg:w-3/5 w-full overflow-hidden rounded-2xl">
              <img
                src={mainImage}
                alt="RoomImage"
                className="w-full h-96 rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* other images - Grid layout improved */}
            <div className="grid grid-cols-2 gap-4 lg:w-2/5 w-full">
              {room?.images.length > 1 &&
                room.images.map((image, index) => (
                  <img
                    onClick={() => setMainImage(image)}
                    key={index}
                    src={image}
                    alt="Room Image"
                    className={`w-full h-44 rounded-xl shadow-md object-cover cursor-pointer hover:opacity-90 transition-opacity ${
                      mainImage === image ? "ring-4 ring-orange-500" : ""
                    }`}
                  />
                ))}
            </div>
          </div>

          {/* Room Highlights - Improved typography and spacing */}
          <div className="flex flex-col md:flex-row md:justify-between mt-12 items-start">
            <div className="flex flex-col max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold italic">
                Experience Luxury Like Never Before
              </h1>
              <div className="flex flex-wrap items-center mt-6 mb-8 gap-3">
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
            </div>
            {/* Room Price - Made more prominent */}
            <div className="bg-primary/10 rounded-xl p-4 mt-4 md:mt-0">
              <p className="text-3xl font-bold text-primary">
                ${room.pricePerNight}
                <span className="text-lg font-normal text-gray-600">
                  {" "}
                  / night
                </span>
              </p>
            </div>
          </div>

          {/* Check in /out form - Improved styling and layout */}
          <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-xl p-8 rounded-2xl mx-auto mt-16 max-w-6xl border border-gray-100">
            <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-6 md:gap-10 text-gray-700">
              {/* Check in */}
              <div className="flex flex-col">
                <label
                  htmlFor="checkInDate"
                  className="font-medium text-primary mb-2">
                  Check-In
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  placeholder="Check-In"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              <div className="w-px h-16 bg-gray-300/70 max-md:hidden"></div>

              {/* Check out */}
              <div className="flex flex-col">
                <label
                  htmlFor="checkOutDate"
                  className="font-medium text-primary mb-2">
                  Check-Out
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  placeholder="Check-Out"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              <div className="w-px h-16 bg-gray-300/70 max-md:hidden"></div>

              {/* Guests */}
              <div className="flex flex-col">
                <label
                  htmlFor="Guests"
                  className="font-medium text-primary mb-2">
                  Guests
                </label>
                <input
                  type="number"
                  id="Guests"
                  placeholder="0"
                  className="w-24 rounded-lg border border-gray-300 px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-lg max-md:w-full max-md:mt-8 md:px-8 py-4 text-base font-bold shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
              Check Availability
            </button>
          </form>
        </div>

        {/* Common Specifications - Added cards with hover effects */}
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {roomCommonData.map((spec, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-lg font-medium mb-2">{spec.title}</p>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description - Styled with decorative elements */}
        <div className="max-w-4xl mx-auto border-y border-gray-300 my-16 py-10 px-6 text-gray-600 relative bg-white rounded-lg shadow-sm">
          <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary -translate-x-2 -translate-y-2"></div>
          <p className="italic leading-relaxed text-lg">
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary translate-x-2 translate-y-2"></div>
        </div>

        {/* Hosted by - Enhanced with card design */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="flex items-center gap-6">
            <img
              src={room.hotel.owner.image}
              alt="host"
              className="h-20 w-20 md:h-24 md:w-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="">
              <p className="text-2xl md:text-3xl font-playfair font-medium">
                Hosted by {room.hotel.name}
              </p>
              <div className="flex items-center mt-2">
                <StarRating />
                <p className="ml-2 text-gray-600">200+ Reviews</p>
              </div>
            </div>
          </div>

          <button className="px-8 py-3 mt-6 md:mt-0 rounded-full text-white bg-primary hover:bg-primary-dull transition-all font-bold shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
