import React from "react";
import NavBar from "../../components/HoteOwner/NavBar";
import SideBar from "../../components/HoteOwner/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex h-full">
        <SideBar />
        <div className="flex-1 p-4 md:px-10 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
