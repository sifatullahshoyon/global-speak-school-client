import React from "react";
import Header from "../Header/Header";
import Feature from "./Feature";
import Title from "../../../components/Title";
import PopularClassesSection from "./PopularClassesSection";
import PopularInstructorsSection from "./PopularInstructorsSection";
import FaqSection from "./FaqSection";
import Subcribe from "./Subcribe";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <Header />
      <Feature />
      <PopularClassesSection />
      <PopularInstructorsSection />
      <FaqSection />
      <Subcribe />
    </>
  );
};

export default Home;
