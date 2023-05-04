import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mt-20">
      <div className="w-full  text-center border-y-2 border-r-slate-800 grid md:grid-cols-3 grid-cols-1  h-64">
        <div className="p-5 md:text-left">
          <h1 className="text-2xl font-bold">Chef's House</h1>
          <p className="text-lg text-slate-600">
            we are fortunate to have a team of talented chefs who bring their
            expertise and passion for cooking to every meal.
          </p>
        </div>
        <div className="p-5 text-center">
          <h1 className="text-2xl text-slate-600">Navigation's</h1>
          <ul className=" md:bg-white bg-white/90 p-5">
            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2 ">
              <Link
                to="/"
                className={({ isActive }) =>
                  +isActive ? " text-orange-600" : " "
                }
              >
                Home
              </Link>
            </li>
            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2">
              <Link
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                blog
              </Link>
            </li>
            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2">
              <Link
                to="/login"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-orange-600" : " ")
                }
              >
                Log in
              </Link>
            </li>

            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2">
              <Link
                to="/register"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-orange-600" : " ")
                }
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5 text-center">
          <h1 className="text-3xl text-slate-600">contact Us</h1>
          <p className="my-5 text-slate-500">FOllOW US</p>

          <div className="flex items-center text-center gap-16 text-blue-600 hover:text-blue-700 text-2xl w-5/12 mx-auto">
            <a href="https://www.facebook.com/shekhmostakimrahman">
              <FaFacebook></FaFacebook>
            </a>

            <a href="https://www.twitter.com">
              <FaTwitter></FaTwitter>
            </a>

            <a href="https://www.instagram.com">
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
