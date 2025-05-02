/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div className="py-8 px-6 md:px-10 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Title
          align="left"
          font="Outfit"
          title="Dashboard"
          subTitle="Monitor your room listings, track bookings and analyze revenue - All in one place. Stay updated with real-time insights to ensure smooth operations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {/* Total Bookings */}
          <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-6">
            <div className="bg-blue-100 rounded-full p-3 mr-5">
              <img src={assets.totalBookingIcon} alt="" className="h-10 w-10" />
            </div>
            <div className="flex flex-col font-medium">
              <p className="text-blue-500 text-xl font-semibold mb-1">
                Total Bookings
              </p>
              <p className="text-gray-700 text-2xl font-bold">
                {dashboardData.totalBookings}
              </p>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-6">
            <div className="bg-green-100 rounded-full p-3 mr-5">
              <img src={assets.totalRevenueIcon} alt="" className="h-10 w-10" />
            </div>
            <div className="flex flex-col font-medium">
              <p className="text-green-600 text-xl font-semibold mb-1">
                Total Revenue
              </p>
              <p className="text-gray-700 text-2xl font-bold">
                $ {dashboardData.totalRevenue}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl text-gray-800 font-bold mb-6 font-playfair">
            Recent Bookings
          </h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 text-gray-800 font-semibold text-left">
                      User Name
                    </th>
                    <th className="py-4 px-6 text-gray-800 font-semibold text-left max-sm:hidden">
                      Room Name
                    </th>
                    <th className="py-4 px-6 text-gray-800 font-semibold text-center">
                      Total Amount
                    </th>
                    <th className="py-4 px-6 text-gray-800 font-semibold text-center">
                      Payment Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {dashboardData.bookings.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-4 px-6 text-gray-700 border-t border-gray-200">
                        {item.user.username}
                      </td>
                      <td className="py-4 px-6 text-gray-700 border-t border-gray-200 max-sm:hidden">
                        {item.room.roomType}
                      </td>
                      <td className="py-4 px-6 text-gray-700 border-t border-gray-200 text-center font-medium">
                        $ {item.totalPrice}
                      </td>
                      <td className="py-4 px-6 border-t border-gray-200">
                        <div className="flex justify-center">
                          <span
                            className={`py-1.5 px-4 text-xs font-medium rounded-full ${
                              item.isPaid
                                ? "bg-green-100 text-green-700"
                                : "bg-amber-100 text-amber-700"
                            }`}>
                            {item.isPaid ? "Completed" : "Pending"}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
