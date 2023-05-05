import React from "react";

const Recipe = ({ recipes }) => {
  return (
    <div className="w-100 bg-base-100 shadow-2xl md:flex gap-12">
      {recipes.recipes.map((recipe) => (
        <div key={recipe.recipe_id}>

          <div className="border-2 rounded-lg shadow-lg">
            <img className="w-full h-48" src={recipe.image_url} alt="" />
            <div className="p-6">
            <h3 className="text-lg pb-6"><span className="text-amber-700 font-semibold">{recipe.recipe_name}</span></h3>
            <p className="pb-3"><span className="font-semibold">Ingredients</span> : <span className="text-green-700">{recipe.ingredients}</span></p>
            <p><span className="font-semibold">Directions</span> : {recipe.directions}</p>
            </div>
            <div>
            <button className="btn btn-secondary">Order Now</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Recipe;
