import React, { useState } from "react";
import { images } from "../../assets/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative w-full h-[80px] flex items-center justify-between p-4 sm:px-[120px] sm:py-[24px] bg-[#111] text-white">
        <img
          src={images.logoApp}
          className=" h-[20px] w-[226px] md:h-[26px] object-cover"
          alt="App Logo"
        />

        <div className="hidden md:flex items-center space-x-4 sm:space-x-[44px]">
          <div className="flex justify-center items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[2.14] font-normal">
            Introduction
          </div>
          <div className="flex justify-center items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[2.14] font-normal">
            Solution
          </div>
          <div className="flex justify-center items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[2.14] font-normal">
            Rate Plan
          </div>
          <div className="w-[1px] h-[23px] bg-[#ccc8c6]"></div>
          <div className="flex justify-center items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[2.14] font-normal">
            Login
          </div>
          <div className="flex justify-center items-center h-[30px] uppercase text-center text-[#fff] text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[2.14] font-normal">
            Apply for Free Use
          </div>
        </div>

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
        <a
          href="#introduction"
          className="text-xl"
          onClick={handleMenuItemClick}
        >
          Introduction
        </a>
        <a href="#solution" className="text-xl" onClick={handleMenuItemClick}>
          Solution
        </a>
        <a href="#rate-plan" className="text-xl" onClick={handleMenuItemClick}>
          Rate Plan
        </a>
        <a href="#login" className="text-xl" onClick={handleMenuItemClick}>
          Login
        </a>
        <a href="#apply" className="text-xl" onClick={handleMenuItemClick}>
          Apply for Free Use
        </a>
      </div>
    </>
  );
};
