import React, { useEffect, useState } from 'react';
import ChefInfo from '../ChefInfo/ChefInfo';
import { FaUtensils } from 'react-icons/fa';

const ChefsCard = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://chef-recipe-hunter-server-rubel6623.vercel.app/chefsData')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [])

    return (
        <div className="container mx-auto px-4 sm:px-6 py-12">
            <div className="mb-12 text-center">
                <span className="inline-block text-amber-500 mb-2">
                    <FaUtensils className="inline-block mr-2" size={20} />
                    <span className="text-lg font-medium">Culinary Masters</span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600">
                    Our Expert Chefs
                </h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
                <p className="max-w-2xl mx-auto mt-6 text-gray-600">
                    Meet our culinary experts who bring years of experience and passion to every dish they create. 
                    Learn their special recipes and cooking techniques.
                </p>
            </div>
            
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {chefs.map(chef => (
                        <div key={chef.id} className="flex">
                            <ChefInfo chef={chef} />
                        </div>
                    ))}
                </div>
            )}
            
            <div className="mt-12 text-center">
                <button className="btn bg-amber-600 hover:bg-amber-700 text-white border-none">
                    View All Chefs
                </button>
            </div>
        </div>
    );
};

export default ChefsCard;