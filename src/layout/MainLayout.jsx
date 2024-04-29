import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../pages/Home/TopBar/TopBar";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isLogin = location?.pathname?.includes("instructors") || location?.pathname?.includes("classes");
  return (
    <div>
      {isLogin || <TopBar />}
      <Navbar />
      <div className="min-h-[calc(100vh - 392px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
