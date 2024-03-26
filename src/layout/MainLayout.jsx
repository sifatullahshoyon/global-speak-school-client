import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import TopBar from "../pages/Home/TopBar/TopBar";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="min-h-[calc(100vh - 392px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
