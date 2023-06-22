import React, { useEffect, useState } from 'react';
import ChefInfo from '../ChefInfo/ChefInfo';

const ChefsCard = () => {
    const [chefs,setChefs]=useState([]);

    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-rubel6623.vercel.app/chefsData')
            .then(res=>res.json())
            .then(data=>setChefs(data))
            .catch(error=>console.error(error))
    },[])

    return (
        <div>
            <h4 className='text-center text-red-400 text-4xl font-semibold m-12 pt-4'>Chef's Corners🍳</h4>
            <div className='grid md:grid-cols-3 gap-20 ms-28 mb-6'>
            {
                chefs.map(chef=><ChefInfo key={chef.id} chef={chef}></ChefInfo>)
            }
            </div>
        </div>
    );
};

export default ChefsCard;