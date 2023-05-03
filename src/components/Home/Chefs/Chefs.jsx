import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";
const Chefs = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://chef-house-server-jihanstk.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(chefData);
  return (
    <div className="md:w-9/12 w-full mx-auto">
      <div className="my-14 text-center">
        <h1 className=" text-3xl font-bold my-5">Chef's preview</h1>
        <p className="text-slate-500 w-6/12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam
          dolor minus dolores odio nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore dignissimos in dicta eligendi, possimus
          numquam!
        </p>
      </div>
      <Swiper
        className="gap-10"
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        autoplay
        pagination={{ clickable: true }}
      >
        {chefData.map((singleChef) => {
          return (
            <SwiperSlide key={singleChef.id}>
              <div className=" relative card w-96 shadow-xl  mx-10">
                <figure className="relative px-10 pt-10 bg-blue-500 overflow-visible h-44">
                  <img
                    src={singleChef.photo}
                    alt="chef"
                    className=" absolute -bottom-10 h-40 w-40 rounded-full border-spacing-6 border-8 border-stone-50 "
                  />
                </figure>
                <div className="card-body items-center text-center mt-5">
                  <h2 className="card-title">{singleChef.chefName}</h2>
                  <p>{singleChef.yearsOfExperience} Years Experience</p>
                  <p>Like: {singleChef.likes}</p>
                  <p>number Of Recipes: {singleChef.numberOfRecipes}</p>
                  <div className="card-actions">
                    <Link
                      to={`/chef/${singleChef.id}`}
                      className="btn btn-success"
                    >
                      view Details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Chefs;
