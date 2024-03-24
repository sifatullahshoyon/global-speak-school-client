import React from "react";
import Container from "../../../components/shared/Container";
import { LuMailOpen, LuPhoneCall } from "react-icons/lu";
import { FaClock, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-amber-500 p-2">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-white text-base">
          <div className="md:flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <LuPhoneCall />
              <p>+453 123 456</p>
            </div>
            <div className="flex items-center gap-2">
              <LuMailOpen />
              <p>globalspeakschool.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <p>Mon-Fri: 8:00am-5:00pm</p>
            </div>
          </div>
          {/* social icon part */}
          <div className="flex gap-3 items-center">
            <FaFacebookF className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
