import React from "react";
import Header from "../Header/Header";
import Feature from "./Feature";
import Title from "../../../components/Title";
import PopularClassesSection from "./PopularClassesSection";
import PopularInstructorsSection from "./PopularInstructorsSection";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <Header />
      <Feature />
      <PopularClassesSection />
      <PopularInstructorsSection />
    </>
  );
};

export default Home;
