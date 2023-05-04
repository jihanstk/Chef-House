import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChefRecipe from "./SingleChefRecipe/SingleChefRecipe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SingleChef = () => {
  const singleChefRec = useLoaderData();

  return (
    <div className="bg-yellow-200/20">
      <ToastContainer />
      <div className="w-full h-80 bg-blue-700 relative mb-72">
        <h1 className="text-3xl text-center pt-20 text-white font-semibold">
          Here is chef Delicious recipe
        </h1>
        <div className=" absolute -bottom-60  md:left-2/3 left-16">
          <LazyLoadImage
            className="w-32 h-32 rounded-full border-8 border-white "
            src={singleChefRec.photo}
            height="8rem"
            width="8rem"
            effect="blur"
          />
          {/* <img
            className="w-32 h-32 rounded-full border-8 border-white"
            src={singleChefRec.photo}
            alt=""
          /> */}
          <h3 className="text-2xl font-bold text-left -ml-8">
            {singleChefRec.chefName}
          </h3>
          <p className="text-left -ml-8">
            <strong>{singleChefRec.yearsOfExperience}</strong> Year Of
            Experience
          </p>
          <p className="text-left -ml-8">
            Made <strong>{singleChefRec.numberOfRecipes}</strong> number's Of
            Recipe
          </p>
          <p className="text-left -ml-8 w-80">
            Bio: {singleChefRec.bio.slice(0, 100)}
          </p>
          <p className=" text-left -ml-8 flex items-center text-lg font-semibold">
            <span className="mr-2">Likes : </span>
            <FaHeart className="mr-2 text-red-600"></FaHeart>{" "}
            <span>{singleChefRec.likes}</span>
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Food Recipe is Here
      </h1>
      <div className="md:p-16 md:flex gap-10  ">
        {singleChefRec.recipe.map((CR, i) => {
          return <SingleChefRecipe key={i} recipe={CR}></SingleChefRecipe>;
        })}
      </div>
    </div>
  );
};

export default SingleChef;
