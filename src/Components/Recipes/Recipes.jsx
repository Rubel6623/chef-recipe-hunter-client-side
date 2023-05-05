import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const {id}=useParams();
    const chefRecipes=useLoaderData();
    console.log(chefRecipes);
    return (
        <div>
            <h3 className='text-center text-3xl font-bold my-6 text-amber-500'>All  Special Recipes</h3>
            <div>
            {
                chefRecipes.map(recipes=><Recipe key={recipes.id} recipes={recipes}></Recipe>)
            }
            </div>
        </div>
    );
};

export default Recipes;