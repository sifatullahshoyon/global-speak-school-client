import React from "react";
import Title from "../../components/Title";
import useScrollPosition from "../../hooks/useScrollPosition";
import Container from "../../components/shared/Container";
import PopularInstructorsSection from "../Home/Home/PopularInstructorsSection";

const Instructors = () => {
  const scrolled = useScrollPosition();
  return (
    <div
      className={`w-full ${scrolled ? "top-0" : ""}  transition duration-500 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* Dynamic Title */}
      <Title title="Home" />
      <Container>
        <div className="pt-20">
          <PopularInstructorsSection />
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
