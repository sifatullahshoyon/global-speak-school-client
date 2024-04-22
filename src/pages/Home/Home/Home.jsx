import React from "react";
import Header from "../Header/Header";
import Feature from "./Feature";
import Title from "../../../components/Title";
import PopularClassesSection from "./PopularClassesSection";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <Header />
      <Feature />
      <PopularClassesSection />
    </>
  );
};

export default Home;
