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
        <p className="mb-4 md:text-4xl text-xl font-extrabold inline-block slides">
          <span>Boiled</span>
          <span>Fries</span>
          <span>Steamed</span>
          <span>chicken</span>
          <span>beef</span>
        </p>
        <h1 className="md:text-6xl text-2xl font-bold">
          amet consectetur adipisicing elit. Placeat aut eveniet delectus
          voluptates, doloribus iusto a
        </h1>
        <p className="md:text-xl text-slate-700 my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          error alias quidem cumque sequi aliquam!
        </p>
        <button className="btn btn-error">
          Explore Recipes <IoMdRestaurant className="text-2xl"></IoMdRestaurant>{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
