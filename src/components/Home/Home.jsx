import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import AboutShort from "./AboutShort/AboutShort";
import Chefs from "./Chefs/Chefs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutShort></AboutShort>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;
