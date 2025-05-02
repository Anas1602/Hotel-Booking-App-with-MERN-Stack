/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      true;
    } else {
      setIsScrolled(false);
    }
    setIsScrolled((prev) => (location.pathname !== "/" ? true : prev));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/90 shadow-lg text-gray-800 backdrop-blur-lg py-3 md:py-4"
          : "py-6 md:py-8"
      }`}>
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-10 transition-all duration-300 ${
            isScrolled && "invert opacity-90 scale-95"
          }`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 font-medium">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group relative py-2 overflow-hidden ${
              isScrolled
                ? "text-gray-800 hover:text-primary"
                : "text-white hover:text-white/80"
            } transition-colors duration-300`}>
            <span className="relative z-10">{link.name}</span>
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out ${
                isScrolled ? "bg-primary" : "bg-white"
              }`}
            />
          </a>
        ))}
        <button
          onClick={() => navigate("/owner")}
          className={`border-2 px-5 py-1.5 text-sm font-medium rounded-full cursor-pointer transform hover:-translate-y-0.5 transition-all duration-300 ${
            isScrolled
              ? "border-primary text-primary hover:bg-primary hover:text-white"
              : "border-white text-white hover:bg-white/10"
          }`}>
          Dashboard
        </button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-6">
        <button
          className={`group relative p-2 rounded-full hover:bg-gray-100/20 transition-all duration-300`}>
          <img
            src={assets.searchIcon}
            alt="search"
            className={`h-5 transition-all duration-300 ${
              isScrolled && "invert"
            }`}
          />
        </button>

        {user ? (
          <div className="ml-2 transform hover:scale-105 transition-transform duration-300">
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={BookIcon}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        ) : (
          <button
            onClick={openSignIn}
            className={`flex items-center justify-center px-8 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary-dull"
                : "bg-white text-gray-800 hover:bg-white/90"
            }`}>
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 md:hidden">
        {user && (
          <div className="transform hover:scale-105 transition-transform duration-300">
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={BookIcon}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        )}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-full ${
            isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
          } transition-all duration-300`}>
          <img
            src={assets.menuIcon}
            alt="menu"
            className={`h-5 transition-all duration-300 ${
              isScrolled && "invert"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}>
        <button
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}>
          <img src={assets.closeIcon} alt="closeMenu" className="h-6" />
        </button>

        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src={assets.logo}
            alt="logo"
            className="h-12 mb-8 invert opacity-90"
          />
        </Link>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="relative py-2 text-lg hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary hover:after:w-1/2 after:transition-all after:duration-300">
            {link.name}
          </a>
        ))}

        {user && (
          <button
            onClick={() => {
              navigate("/owner");
              setIsMenuOpen(false);
            }}
            className="border-2 border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 mt-4">
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={() => {
              openSignIn();
              setIsMenuOpen(false);
            }}
            className="bg-primary text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-primary-dull transition-all duration-300 mt-6">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
