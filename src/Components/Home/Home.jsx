import React from "react";
import "./Home.css";
import ChefsCard from "../ChefsCard/ChefsCard";
import { useParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero py-24 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chef-cooking.jpg?quality=82&strip=1&w=640"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-red-600">
              Find Your Favourite Chef!
            </h1>
            <p className="py-6 text-sky-700">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <h3 className="text-center text-3xl underline font-bold mt-2 text-amber-600">Our Services</h3>

      <div className="md:flex">
        <div className="card w-96 bg-base-100 shadow-xl mt-4 mx-4">
          <div className="card-body border rounded-xl">
            <img className=" w-28 h-28 mx-auto" src="https://play-lh.googleusercontent.com/dUOpm3aGDBI9WepPoXYrehzeyq13w5xAgj3wuiI1plovx40RyxKoSWvqrRuq9RPyLQ=w240-h480-rw" alt="" />
            <h2 className="card-title">Home Delivery!</h2>
            <p>Fastest Deliver in the City Area !!</p>
            <p><span className="text-gray-400">100+ Delivery Man</span></p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4 mx-4">
          <div className="card-body border rounded-xl">
            <img className=" w-28 h-32 mx-auto" src="https://cdn.vectorstock.com/i/1000x1000/56/76/happy-chef-icon-vector-14605676.webp" alt="" />
            <h2 className="card-title">Experienced Chef !</h2>
            <p>We Provides Experienced Chef to Serve You !!</p>
            <p><span className="text-gray-400 text-center">50+ Experienced Chef</span></p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4 mx-4">
          <div className="card-body border rounded-xl">
            <img className=" w-36 h-28 mx-auto" src="https://esha.com/wp-content/uploads/2020/09/BLOG-MENU-PLAN.jpg" alt="" />
            <h2 className="card-title">Delicious Menu!</h2>
            <p>We Provides Differents Types of Delicious Items.</p>
            <p><span className="text-gray-400">150+ Items </span></p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-4 mx-4">
          <div className="card-body border rounded-xl">
            <img className=" w-32 h-28 mx-auto" src="https://cdn.pixabay.com/photo/2021/05/25/02/03/restaurant-6281067_960_720.png" alt="" />
            <h2 className="card-title">Booking Restaurant !</h2>
            <p>If You Want to Booked Restaurant.It is the Right Place.</p>
            <p><span className="text-gray-400">10+ Beautiful Restaurant</span></p>
          </div>
        </div>
      </div>

      <div className="mt-6">
      <ChefsCard></ChefsCard>
      </div>
    </div>
  );
};

export default Home;
