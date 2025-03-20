import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaUtensils, FaUserClock, FaRegStar } from "react-icons/fa";

const ChefInfo = ({chef}) => {
    const {id, name, details, picture, experience, peopleRated, items} = chef;
    
    return (
        <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img 
                    src={picture} 
                    alt={name} 
                    className="w-full h-64 object-cover object-center"
                />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 rounded-bl-lg">
                    <span className="flex items-center">
                        <BiLike className="mr-1" /> {peopleRated}
                    </span>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">{name}</h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                    <FaUserClock className="mr-2 text-amber-600" />
                    <span>{experience} Years Experience</span>
                </div>
                
                <p className="text-gray-700 mb-6 line-clamp-3">{details}</p>
                
                <div className="mb-6 flex items-center">
                    <FaUtensils className="text-amber-600 mr-2" />
                    <span className="font-medium">Recipes: </span>
                    <span className="ml-1 text-amber-600 font-semibold">{items}</span>
                </div>
                
                <Link 
                    to={`chef/${id}`}
                    className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded text-center transition-colors duration-300"
                >
                    View Recipes
                </Link>
            </div>
        </div>
    );
};

export default ChefInfo;