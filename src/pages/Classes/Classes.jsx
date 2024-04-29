import React from "react";
import Title from "../../components/Title";
import useScrollPosition from "../../hooks/useScrollPosition";
import Container from "../../components/shared/Container";
import PopularClassesSection from "../Home/Home/PopularClassesSection";

const Classes = () => {
  const scrolled = useScrollPosition();
  return (
    <div
      className={`w-full ${scrolled ? "top-0" : ""}  transition duration-500 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* Dynamic Title */}
      <Title title="Classes" />
      <Container>
        <div className="pt-20">
          <PopularClassesSection />
        </div>
      </Container>
    </div>
  );
};

export default Classes;
