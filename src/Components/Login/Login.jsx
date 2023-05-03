import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold">Login now!</h1>
       
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-24">

          <form className="card-body">

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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

          </form>
          <h3 className="text-center mb-3">Don't have an Account? <Link to='/register' className="text-red-600"> Register</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
