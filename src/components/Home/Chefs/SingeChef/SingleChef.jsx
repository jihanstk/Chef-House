import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChefRecipe from "./SingleChefRecipe/SingleChefRecipe";

const SingleChef = () => {
  const singleChefRec = useLoaderData();
  return (
    <div className="bg-yellow-200/20">
      <div className="w-full h-80 bg-blue-700 relative mb-32">
        <h1 className="text-3xl text-center pt-20 text-white font-semibold">
          Here is chef Delicious recipe
        </h1>
        <div className=" absolute -bottom-20 md:left-2/3 left-32">
          <img
            className="w-32 h-32 rounded-full border-8 border-white"
            src={singleChefRec.photo}
            alt=""
          />
          <h3 className="text-2xl font-bold text-left -ml-8">
            {singleChefRec.chefName}
          </h3>
        </div>
      </div>
      <div className="p-16">
        <h1 className="text-4xl font-bold text-center">Food Recipe is Here</h1>
        {singleChefRec.recipe.map((CR) => {})}
        <SingleChefRecipe recipe={singleChefRec.recipe}></SingleChefRecipe>
      </div>
    </div>
  );
};

export default SingleChef;
