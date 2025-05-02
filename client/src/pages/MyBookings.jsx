/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="flex flex-col items-start text-left mb-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-4">
            My Bookings
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            Easily manage your past, current, and upcoming hotel reservations in
            one place. Plan your trips seamlessly with just a few clicks.
          </p>
        </div>

        <div className="max-w-6xl w-full text-gray-800">
          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-lg py-4 px-6 bg-white rounded-t-xl shadow-sm">
            <div className="w-1/3 text-primary font-bold">Hotels</div>
            <div className="w-1/3 text-primary font-bold">Date & Timings</div>
            <div className="w-1/3 text-primary font-bold">Payment</div>
          </div>

          {/* Bookings List */}
          {bookings.map((booking, index) => (
            <div
              key={booking._id}
              className={`grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full bg-white shadow-sm hover:shadow-md transition-shadow py-6 px-6 ${
                index === bookings.length - 1
                  ? "rounded-b-xl"
                  : "border-b border-gray-200"
              }`}>
              {/* Hotel Details */}
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={booking.room.images[0]}
                  alt="hotelImg"
                  className="w-full md:w-44 h-32 md:h-28 rounded-xl shadow-md object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-playfair text-2xl font-bold">
                    {booking.hotel.name}
                    <span className="font-inter text-sm text-gray-600 ml-2">
                      ({booking.room.roomType})
                    </span>
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                      className="w-5 h-5"
                    />
                    <span>{booking.hotel.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <img
                      src={assets.guestsIcon}
                      alt="guests icon"
                      className="w-5 h-5"
                    />
                    <span>Guests: {booking.guests}</span>
                  </div>

                  <p className="text-lg font-bold text-primary mt-2">
                    Total: ${booking.totalPrice}
                  </p>
                </div>
              </div>

              {/* Date & Timings */}
              <div className="flex flex-row md:items-center md:gap-12 mt-6 md:mt-0 gap-8">
                <div className="bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
                  <p className="font-medium text-gray-700">Check-In:</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(booking.checkInDate).toDateString()}
                  </p>
                </div>

                <div className="bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
                  <p className="font-medium text-gray-700">Check-Out:</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(booking.checkOutDate).toDateString()}
                  </p>
                </div>
              </div>

              {/* Payment Status */}
              <div className="flex flex-col items-start justify-center mt-6 md:mt-0">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      booking.isPaid ? "bg-green-500" : "bg-red-500"
                    } shadow-sm`}></div>
                  <p
                    className={`text-base font-medium ${
                      booking.isPaid ? "text-green-500" : "text-red-500"
                    }`}>
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </p>
                </div>

                {!booking.isPaid && (
                  <button className="px-6 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-dull active:scale-95 transition-all rounded-lg shadow-md hover:shadow-primary/30 transform hover:-translate-y-1">
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
