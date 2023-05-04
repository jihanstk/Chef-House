import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import AboutShort from "./AboutShort/AboutShort";
import Chefs from "./Chefs/Chefs";
import OurServices from "./OurService/OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutShort></AboutShort>
      <Chefs></Chefs>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
