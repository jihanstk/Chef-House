import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { A11y, Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { FaHeart, FaHeartbeat, FaRegHeart } from "react-icons/fa";
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
    <div className="md:w-11/12 w-full mx-auto">
      <div className="my-14 text-center">
        <h1 className=" text-3xl font-bold my-5">Chef's preview</h1>
        <p className="text-slate-500 md:w-6/12 md:p-5 px-4 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam
          dolor minus dolores odio nisi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore dignissimos in dicta eligendi, possimus
          numquam!
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        freeMode={true}
        className="gap-10"
        spaceBetween={50}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1524: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
      >
        {chefData.map((singleChef) => {
          return (
            <SwiperSlide key={singleChef.id}>
              <div className=" relative card md:w-96 w-11/12 shadow-lg rounded-xl  md:mx-10 mx-auto">
                <figure className="relative px-10 pt-10 bg-blue-500 overflow-visible h-44">
                  <img
                    src={singleChef.photo}
                    alt="chef"
                    className=" absolute -bottom-10 h-40 w-40 rounded-full border-spacing-6 border-8 border-stone-50 "
                  />
                </figure>
                <div className="card-body items-center text-left mt-5">
                  <h2 className="card-title">{singleChef.chefName}</h2>
                  <p>
                    <strong>{singleChef.yearsOfExperience}</strong> Years
                    Experience
                  </p>
                  <p className=" text-left flex items-center justify-between text-lg font-semibold">
                    <span>{singleChef.likes}</span>
                    <FaHeart className="ml-2 text-red-600"></FaHeart>{" "}
                  </p>
                  <p>
                    number Of Recipes:{" "}
                    <strong>{singleChef.numberOfRecipes}</strong>
                  </p>
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
