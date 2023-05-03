import React from "react";
import aboutImg from "../../../assets/image/about-chef-food.webp";
import { FaQuoteLeft } from "react-icons/fa";

const AboutShort = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
      <div className="relative">
        <img className="rounded-xl" src={aboutImg} alt="about Image" />
        <div className="absolute md:top-0 -top-16 md:left-0 left-16 w-8/12 bg-slate-100 rounded-b-lg text-center md:p-8">
          <FaQuoteLeft className="mx-auto text-2xl"></FaQuoteLeft>
          <h5 className="md:text-2xl font-bold text-slate-600">
            Recipes are not just instructions; they're stories told by chefs
            through the language of food
          </h5>
          <p className="text-slate-500">- Clarissa Dickson Wright</p>
        </div>
      </div>
      <div className="md:px-10 md:mt-0 mt-10">
        <p className="text-orange-700 mb-7">About Chef's recipes </p>
        <h1 className="md:text-4xl text-2xl font-bold mb-5">
          The Art of Culinary Innovation: Our Talented Chefs and their Recipes
        </h1>
        <p className="text-slate-500">
          Chefs are the backbone of the culinary world, and their recipes are
          the foundation of every great dish. A chef's recipe is the result of
          years of experience, experimentation, and dedication to the craft.
          They know how to blend ingredients, spices, and flavors in just the
          right way to create dishes that are both delicious and unique.
          <br /> <br /> we are fortunate to have a team of talented chefs who
          bring their expertise and passion for cooking to every meal. They draw
          inspiration from their cultural heritage, as well as global cuisine
          trends, to create dishes that are both traditional and modern.
        </p>
      </div>
    </div>
  );
};

export default AboutShort;
