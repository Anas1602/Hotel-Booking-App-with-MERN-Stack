/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="py-12 px-6 md:px-10 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10">
        {/* Title */}
        <Title
          align="left"
          font="Outfit"
          title="Add Room"
          subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience"
        />

        {/* Upload area for images */}
        <p className="text-gray-800 mt-10 font-medium text-lg mb-3 border-b border-gray-100 pb-2">
          Images
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          {Object.keys(images).map((key) => (
            <label
              htmlFor={`roomImage${key}`}
              key={key}
              className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-gray-200 hover:border-primary transition-colors duration-300">
              <div className="aspect-square flex items-center justify-center bg-gray-50 transition-all duration-300 group-hover:bg-gray-100">
                <img
                  className="max-h-32 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={
                    images[key]
                      ? URL.createObjectURL(images[key])
                      : assets.uploadArea
                  }
                  alt=""
                />
                {!images[key] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-primary transition-colors duration-300"></div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                id={`roomImage${key}`}
                hidden
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>

        {/* Room Type and Pricing */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="sm:col-span-2">
            <p className="text-gray-800 font-medium text-lg mb-3 border-b border-gray-100 pb-2">
              Room Type
            </p>
            <div className="relative">
              <select
                value={inputs.roomType}
                onChange={(e) =>
                  setInputs({ ...inputs, roomType: e.target.value })
                }
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200">
                <option value="">Select Room Type</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family Suite">Family Suite</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-800 font-medium text-lg mb-3 border-b border-gray-100 pb-2">
              Price <span className="text-xs text-gray-500 ml-1">/night</span>
            </p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                $
              </span>
              <input
                type="number"
                placeholder="0"
                className="pl-8 w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                value={inputs.pricePerNight}
                onChange={(e) =>
                  setInputs({ ...inputs, pricePerNight: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-8">
          <p className="text-gray-800 font-medium text-lg mb-3 border-b border-gray-100 pb-2">
            Amenities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  id={`amenities${index + 1}`}
                  checked={inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [amenity]: !inputs.amenities[amenity],
                      },
                    })
                  }
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />{" "}
                <label
                  htmlFor={`amenities${index + 1}`}
                  className="text-gray-700 font-medium cursor-pointer select-none">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
          <button
            className="mt-8 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg shadow-sm transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:outline-none mx-auto block"
            type="submit">
            Add Room
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddRoom;
