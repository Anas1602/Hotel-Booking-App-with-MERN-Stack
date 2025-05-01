import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!isOwnerPath && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
