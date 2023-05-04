import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ForgotPass = () => {
  const { forgotPass } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError("");
    setSuccessMessage("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    console.log(email);
    forgotPass(email)
      .then(() => {
        setSuccessMessage("Password Reset email send");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Reset Password!!!</h1>
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
            <div className="form-control mt-6">
              <input type="submit" value="Log in" className="btn btn-primary" />
            </div>
            <div className="form-control mt-6 inline">
              <p className="text-green-700">{successMessage}</p>
              <p className="text-red-400">{error}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
