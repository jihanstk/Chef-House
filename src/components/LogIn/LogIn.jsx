import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser, googleLogin, githubLogin, user } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [passShow, setPassShow] = useState(false);
  // console.log(location);
  const from = location.state?.from?.pathname;
  console.log(from);
  const handleGoogle = () => {
    setSuccessMessage("");
    setError("");
    if (user) {
      setError("Already Your User is logedin");
      return;
    }
    googleLogin()
      .then(() => {
        setSuccessMessage("Google Login");
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };
  const handelGitHub = () => {
    setSuccessMessage("");
    setError("");
    if (user) {
      setError("Already Your User is logedin");
      return;
    }
    githubLogin()
      .then((res) => {
        setSuccessMessage("GitHub Login");

        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setError("");
    setSuccessMessage("");
    if (user) {
      setError("Already Your User is logedin");
      return;
    }
    // console.log(user.photoURL);
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // return;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccessMessage("You are logedin");

        form.reset();
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please Log In!!!</h1>
        </div>
        <div className="card flex-shrink-0 md:w-5/12 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passShow ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="form-control">
                <label className="label justify-start cursor-pointer">
                  <input
                    onClick={(e) => setPassShow(e.target.checked)}
                    type="checkbox"
                    className="checkbox"
                  />
                  <span className="pl-5">Show Password</span>
                </label>
              </div>
              <label className="label">
                <Link
                  to="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Log in" className="btn btn-primary" />
            </div>
            <div className="form-control mt-6 inline">
              <span>Don't Have An Account</span>
              <Link className=" ml-2 text-blue-600" to="/register">
                Please Register
              </Link>
              <p className="text-green-700">{successMessage}</p>
              <p className="text-red-400">{error}</p>
            </div>
            <div className="flex items-center gap-4">
              <div
                onClick={handleGoogle}
                className=" cursor-pointer flex  items-center font-bold text-orange-600 hover:bg-orange-600/20 border-2 border-slate-600 p-3 rounded-xl"
              >
                <FaGoogle className="text-xl mr-3"></FaGoogle>
                <span>Google</span>
              </div>
              <div
                onClick={handelGitHub}
                className=" cursor-pointer flex  items-center font-bold text-gray-700 hover:bg-slate-500/20 border-2 border-slate-600 p-3 rounded-xl"
              >
                <FaGithub className="text-xl mr-3"></FaGithub>
                <span>GitHub</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
