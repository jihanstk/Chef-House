import React, { useState } from "react";
import { HiOutlineBookmark } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";

const SingleChefRecipe = ({ recipe }) => {
  const [ShowMore, setShowMore] = useState(false);
  const bookMarked = () => {
    toast("added to Favorite");
  };
  return (
    <div>
      <div className=" relative card md:w-96 bg-base-100 shadow-xl overflow-hidden">
        <figure className="w-full ">
          <img
            className="md:w-full w-10/12  h-60"
            src={recipe.photo}
            alt="Shoes"
          />

          <button onClick={bookMarked}>
            <HiOutlineBookmark className=" absolute top-5 right-10 z-50 text-slate-300 font-bold text-2xl"></HiOutlineBookmark>
          </button>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.recipeName}</h2>
          <ol className=" list-decimal ">
            {recipe.ingredients.length > 5
              ? recipe.ingredients
                  .slice(0, 5)
                  .map((ingredient, i) => <li key={i}>{ingredient}</li>)
              : recipe.ingredients}

            <p
              className=" cursor-pointer text-orange-600"
              onClick={() => setShowMore(!ShowMore)}
            >
              {ShowMore ? "Show Less" : "Show More"}
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleChefRecipe;
