import React from "react";
import { Header } from "../Layout/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Layout/Footer";

export const DeafultLayout = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
