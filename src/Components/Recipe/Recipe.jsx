import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Recipe = ({ recipes }) => {
  console.log(recipes);
  const {picture,details,name,experience}=recipes;
  return (
    <div>

    <div className="card card-side shadow-xl mx-12 mb-6">
  <figure><img className="w-full h-full" src={picture} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{experience} Experience</p>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>


      <div className="w-100 bg-base-100 shadow-2xl md:grid md:grid-cols-3 gap-12 mx-8">
      {recipes.recipes.map((recipe) => (
        <div key={recipe.recipe_id}>
          <div className="border-2 rounded-lg shadow-lg mb-6">
            <img
              className="w-full h-64 rounded-lg"
              src={recipe.image_url}
              alt=""
            />
            <div className="p-6">
              <h3 className="text-lg pb-6">
                <span className="text-amber-700 font-semibold">
                  {recipe.recipe_name}
                </span>
              </h3>
              <p className="pb-3">
                <span className="font-semibold">Ingredients</span> :{" "}
                <span className="text-green-700">{recipe.ingredients}</span>
              </p>
              <p>
                <span className="font-semibold">Directions</span> :{" "}
                {recipe.directions}
              </p>
            </div>

            <div className="flex items-center pb-4 px-6">
              <div className="flex-grow">
                <Rating
                  placeholderRating={recipe.rating}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-amber-400"></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                />
                <span>{recipe.rating}</span>
              </div>
              <div className="">
                <button className="btn btn-secondary ">
                  <Link to="/orders">Order Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Recipe;
