import React from "react";
import { roomsDummyData } from "../../assets/assets";
import { useState } from "react";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div className="py-12 px-6 md:px-10 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10">
        <Title
          align="left"
          font="Outfit"
          title="Room Listings"
          subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
        />

        <p className="text-gray-800 mt-10 font-medium text-lg mb-3 border-b border-gray-100 pb-2">
          All Rooms
        </p>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mt-6">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-gray-800 font-medium text-left">
                  Name
                </th>
                <th className="py-4 px-6 text-gray-800 font-medium text-left max-sm:hidden">
                  Facility
                </th>
                <th className="py-4 px-6 text-gray-800 font-medium text-center">
                  Price / night
                </th>
                <th className="py-4 px-6 text-gray-800 font-medium text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {rooms.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 text-gray-700 border-t border-gray-100">
                    {item.roomType}
                  </td>
                  <td className="py-4 px-6 text-gray-700 border-t border-gray-100 max-sm:hidden">
                    {item.amenities.join(", ")}
                  </td>
                  <td className="py-4 px-6 text-gray-700 border-t border-gray-100 text-center font-medium">
                    ${item.pricePerNight}
                  </td>
                  <td className="py-4 px-6 border-t border-gray-100 text-center">
                    <label className="relative inline-flex cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.isAvailable}
                      />
                      <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors duration-300"></div>
                      <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-6"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListRoom;
