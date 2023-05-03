import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUser, forgotPass } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [passShow, setPassShow] = useState(false);

  const handleSubmit = (e) => {
    setError("");
    setSuccessMessage("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccessMessage("Your User is Created");
        updateUser(user, name, photoURL);
        form.reset();
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center ">
          <h1 className="text-5xl font-bold ">Register now!!!</h1>
        </div>
        <div className="card flex-shrink-0 md:w-5/12 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
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
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
              />
            </div>
          </form>
          <div className="form-control mt-6 inline px-10 pb-10">
            Already Have an Account{" "}
            <Link className=" text-blue-700" to="/login">
              Please Log in{" "}
            </Link>
            <p className="text-green-700">{successMessage}</p>
            <p className="text-red-400">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
