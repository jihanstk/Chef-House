import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChefRecipe from "./SingleChefRecipe/SingleChefRecipe";

const SingleChef = () => {
  const singleChefRec = useLoaderData();
  return <div className="bg-yellow-200/20"></div>;
};

export default SingleChef;
