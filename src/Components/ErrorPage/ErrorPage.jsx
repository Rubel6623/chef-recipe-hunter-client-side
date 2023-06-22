import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./Errorpage.css";
import image from "../../assets/404_Not.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="error">

      <h1 className="text-6xl font-semibold mb-12">Oops!</h1>
      <img className="mx-auto" src={image} alt="" />
      <p className="text-lg blur-text  my-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <p className="font-semibold text-red-500 ">
          {error.statusText || error.message}
        </p>
      </p>

      <div className="mt-12">
        <Link to="/">
          <button className="border-2 rounded-3xl px-4 py-2 bg-indigo-400 font-semibold text-white">
            Go To Home
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default ErrorPage;
