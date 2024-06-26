import React from "react";
import "./Header.css";
import Container from "../../../components/shared/Container";
import PrimaryBtn from "../../../components/shared/Button/PrimaryBtn";
import SecondaryBtn from "../../../components/shared/Button/SecondaryBtn";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="banner">
      <Container>
        <div className="flex flex-col h-full pt-44 pl-10">
          <h4 className="text-white font-bold text-lg md:text-xl pb-5 tracking-wide">
            We Will Teach You How To Learn
          </h4>
          <p className="text-white tracking-wide text-2xl md:text-3xl lg:text-6xl font-bold leading-tight pb-5">
            BEST SCHOOL & ANYTHING TO <br />
            <span className="text-amber-500">LEARN</span> SMART WAY
          </p>
          <p className="border-l-2 border-amber-600 pl-4 text-white text-base md:text-lg font-medium tracking-wide mb-12">
            A Theme for Kids , Learning & Course etc.
          </p>
          <div className="flex md:flex-row gap-4">
            <SecondaryBtn label="Discover More" icon={FaChevronRight} />
            <PrimaryBtn
              label="Contact Us"
              border="border"
              icon={FaChevronRight}
              width="w-[150px]"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
