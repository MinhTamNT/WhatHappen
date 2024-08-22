import React, { useState } from "react";
import { images } from "../../assets/image";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Introduction", path: "/introduction" },
    { label: "Solution", path: "/solution" },
    { label: "Rate Plan", path: "/rate-plan" },
    { label: "Login", path: "/login" },
    { label: "Apply for Free Use", path: "/register" },
  ];

  return (
    <>
      <header className="relative w-full h-[80px] flex items-center justify-between p-4 sm:px-[120px] sm:py-[24px] bg-[#111] text-white">
        <img
          src={images.logoApp}
          className="h-[20px] w-[226px] md:h-[26px] object-cover"
          alt="App Logo"
        />

        <nav className="hidden md:flex items-center space-x-4 sm:space-x-[44px]">
          {menuItems.slice(0, 3).map((item) => (
            <div
              key={item.label}
              className="flex items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[2.14] font-normal cursor-pointer"
            >
              {item.label}
            </div>
          ))}
          <div className="w-[1px] h-[23px] bg-[#ccc8c6]"></div>
          <div
            className="flex items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[2.14] font-normal cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </div>
          <div
            className="flex items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[2.14] font-normal cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Apply for Free Use
          </div>
        </nav>

        <button
          className="sm:hidden flex items-center text-white focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </header>

      <div
        className={`absolute top-0 right-0 w-full h-screen bg-[#111] z-50 text-white flex flex-col items-center justify-center space-y-4 sm:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "hidden"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          onClick={handleMenuToggle}
        >
          &times;
        </button>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="text-xl"
            onClick={handleMenuItemClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};
