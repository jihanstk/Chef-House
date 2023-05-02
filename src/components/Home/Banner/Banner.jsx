import React from "react";
import bannerVid from "../../../assets/video/chef-prepair.mp4";

const Banner = () => {
  return (
    <div className="w-full  relative">
      <video src={bannerVid} autoPlay loop muted></video>
      <div className="overlay absolute top-0"></div>
    </div>
  );
};

export default Banner;
