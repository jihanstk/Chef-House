import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Header = () => {
  const [resNav, setResNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="">
      <nav className="shadow relative md:px-10 px-5 md:py-2 py-5 flex justify-between items-center w-full mx-auto">
        <h1 className="md:text-4xl font-bold font-sans text-lg  ">
          CHEF'S HOUSE
        </h1>
        <div
          className={`md:static absolute z-50 duration-300 md:w-auto w-full text-center ${
            resNav ? "top-16 right-0" : "-top-60 right-0"
          }`}
        >
          <ul className="md:flex  gap-8 items-center z-40 md:bg-white bg-white/90 p-5">
            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  +isActive ? " text-orange-600" : " "
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                blog
              </NavLink>
            </li>

            <li className="text-xl text-slate-600 hover:text-slate-700 mb-2">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-orange-600" : " ")
                }
              >
                Register
              </NavLink>
            </li>
            <li className="md:hidden visible text-xl text-slate-600 hover:text-slate-700 mb-2">
              <button
                onClick={handleLogOut}
                className=" border-2 rounded-xl border-black/50 p-2 hover:bg-slate-700/20 "
              >
                SignOut
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          {user ? (
            <div className="flex items-center justify-between">
              {user?.photoURL ? (
                <img
                  title={user.displayName}
                  className="w-10  h-10 rounded-full mr-2"
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <p className=" font-bold">{user?.displayName?.slice(0, 6)}'s</p>
              )}
              <button
                onClick={handleLogOut}
                className="signOut border-2 rounded-xl border-black/50 ml-2 p-2 hover:bg-slate-700/20 "
              >
                SignOut
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <Link
                className="border-2 rounded-xl border-black/50 p-2 px-5 hover:bg-slate-700/20 "
                to="/login"
              >
                Login
              </Link>{" "}
            </div>
          )}
          <div
            onClick={() => setResNav(!resNav)}
            className="md:hidden visible text-xl"
          >
            {resNav ? <FaTimes></FaTimes> : <FaBars></FaBars>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
