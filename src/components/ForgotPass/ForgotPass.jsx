import React from "react";

const ForgotPass = () => {
  const { loginUser } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError("");
    setSuccessMessage("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    console.log(email);
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
