import React, { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { toast } from "react-toastify";

const SingleChefRecipe = ({ recipe }) => {
  const [ShowMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(5);
  const [Toast, setToast] = useState(false);
  const bookMarked = (recipename) => {
    // const isChecked = e.target.checked;
    toast(`${recipename} added to Favorite`);
    setToast(true);
  };
  const handleShowAllOrLess = () => {
    setShowMore(!ShowMore);
    !ShowMore ? setVisible(recipe.ingredients.length) : setVisible(5);
  };

  return (
    <div>
      <div className=" card md:w-96 bg-base-100 shadow-xl overflow-hidden">
        <figure className="w-full ">
          <LazyLoadImage
            src={recipe.photo}
            width="100%"
            height="15rem"
            effect="blur"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.recipeName}</h2>
          <ol className=" list-decimal ">
            {recipe.ingredients.length > 5
              ? recipe.ingredients
                  .slice(0, visible)
                  .map((ingredient, i) => <li key={i}>{ingredient}</li>)
              : recipe.ingredients}

            <p
              className="cursor-pointer text-orange-600"
              onClick={handleShowAllOrLess}
            >
              {ShowMore ? "Show Less" : "Show More"}
            </p>
          </ol>
          <button
            onClick={() => bookMarked(recipe.recipeName)}
            disabled={Toast}
            className="btn btn-error"
          >
            added to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleChefRecipe;
