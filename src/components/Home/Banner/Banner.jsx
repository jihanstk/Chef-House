import React from "react";
import bannerVid from "../../../assets/video/chef-prepair.mp4";
import phoneVid from "../../../assets/video/chef-for-phone.mp4";
import { IoMdRestaurant } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <div className="w-full max-h-max relative vid-overlay for-lg">
        <video
          className="w-full h-max  "
          src={bannerVid}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="w-full max-h-max relative vid-overlay md:hidden visible">
        <video
          className="w-full h-max "
          src={phoneVid}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className=" p-6 absolute md:top-1/4 top-32  md:left-1/4 left-0 text-center mx-auto md:w-6/12 w-full">
        <h1 className="md:text-5xl text-2xl font-bold">
          Indulge in the Exquisite Flavors of Chef House: Where Culinary
          Artistry Meets Fine Dining
        </h1>
        <p className=" md:text-4xl text-xl font-extrabold inline-block slides">
          <span>Boiled</span>
          <span>Fries</span>
          <span>Steamed</span>
          <span>chicken</span>
          <span>beef</span>
        </p>
        <p className="md:text-xl text-slate-700 my-4">
          Welcome to Chef House, where every dish is a masterpiece crafted by
          our expert chefs with the finest ingredients and culinary techniques.
          Our elegant ambiance and impeccable service make for a truly
          unforgettable dining experience. Join us and indulge in the delectable
          flavors that only Chef House can offer
        </p>
        <button className="btn btn-error">
          Explore Chefs <IoMdRestaurant className="text-2xl"></IoMdRestaurant>{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
