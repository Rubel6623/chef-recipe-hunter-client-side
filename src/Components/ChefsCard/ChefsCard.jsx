import React, { useEffect, useState } from 'react';
import ChefInfo from '../ChefInfo/ChefInfo';

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
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-center text-amber-600 text-4xl font-bold mb-12">
                Our Expert Chefs
                <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
            </h2>
            
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        chefs.map(chef => <ChefInfo key={chef.id} chef={chef}></ChefInfo>)
                    }
                </div>
            )}
        </div>
    );
};

export default ChefsCard;