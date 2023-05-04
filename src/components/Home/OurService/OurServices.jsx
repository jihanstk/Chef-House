import React from "react";
import {
  FaCocktail,
  FaCoffee,
  FaConciergeBell,
  FaCookie,
  FaGrinAlt,
  FaHamburger,
  FaPalette,
  FaPizzaSlice,
} from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="my-32">
      <h1 className="text-4xl text-center font-bold">Our Also Services</h1>
      <p className="text-lg text-slate-600 w-6/12 mx-auto text-center mt-7">
        Chefs are the backbone of the culinary world, and their recipes are the
        foundation of every great dish. A chef's recipe is the result of years
        of experience, experimentation, and dedication to the craft.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 md:w-10/12 mx-auto gap-10 mt-10">
        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaCocktail className="text-6xl text-error"></FaCocktail>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Personalized Menu Creation
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              the chef will work with customers to design a customized menu for
              their special event or occasion, tailored to their specific tastes
              and dietary needs.
            </p>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaConciergeBell className="text-6xl text-error"></FaConciergeBell>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Cooking Classes
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              the chef will teach customers how to cook various dishes and offer
              tips and techniques for creating delicious meals at home.
            </p>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaCookie className="text-6xl text-error"></FaCookie>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Chef's Table Experience
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              a unique dining experience where the chef prepares a multi-course
              meal right in front of the customers, providing an intimate and
              interactive culinary experience.
            </p>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaGrinAlt className="text-6xl text-error"></FaGrinAlt>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Catering
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              the chef will provide catering services for private events,
              corporate functions, and weddings, creating a customized menu and
              ensuring that all food is prepared to the highest standard
            </p>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaCoffee className="text-6xl text-error"></FaCoffee>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Private chef!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              the chef will provide expert recommendations for pairing wines
              with specific dishes, enhancing the overall dining experience.
            </p>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <FaHamburger className="text-6xl text-error"></FaHamburger>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kitchen Consultation
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              restaurant owners looking to improve their kitchen operations,
              including menu development, kitchen design, and staff training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
