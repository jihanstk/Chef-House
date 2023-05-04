import React from "react";
import error from "../assets/image/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center w-10/12 h-3/6 mx-auto">
      <div className="text-center">
        <img className="w-10/12 h-3/6 mx-auto" src={error} alt="" />
        <Link className="btn btn-error text-center" to="/">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
