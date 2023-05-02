import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  const [resNav, setResNav] = useState(false);

  return (
    <div className="">
      <nav className="shadow relative px-10 md:py-2 py-5 flex justify-between items-center w-full mx-auto">
        <h1 className="md:text-4xl font-bold font-sans text-lg  ">
          Chef's House
        </h1>
        <div
          className={`md:static absolute duration-300 ${
            resNav ? "top-11 right-0" : "-top-60 right-0"
          }`}
        >
          <ul className="md:flex gap-8 items-center p-5">
            <li className="text-xl text-slate-600 hover:text-slate-700 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : " "
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-xl text-slate-600 hover:text-slate-700 ">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                blog
              </NavLink>
            </li>
            <li className="text-xl text-slate-600 hover:text-slate-700 ">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-orange-600" : " ")
                }
              >
                Log in
              </NavLink>
            </li>

            <li className="text-xl text-slate-600 hover:text-slate-700 ">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-orange-600" : " ")
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <FaSearch className="text-xl"></FaSearch>
          <div
            onClick={() => setResNav(!resNav)}
            className="md:hidden visible text-xl"
          >
            <FaBars></FaBars>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
