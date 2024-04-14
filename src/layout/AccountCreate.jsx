import React from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const AccountCreate = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh - 392px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AccountCreate;
