import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ChefInfo = ({chef}) => {
    console.log(chef);
    const {name,details,picture,experience,peopleRated,items}=chef;
    return (
        <div className='card w-96 bg-base-100 shadow-xl'>
            <img src={picture} alt="" />
            <div className='px-8 bg-sky-100 pb-6'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-green-600'>{experience} Experience</p>
            <p className='mt-6'>{details}</p>

            <p className='mt-4'><span className='font-semibold'>Recipes : </span><span className='text-red-500'>{items}</span></p>

            <div className='grid grid-cols-2'>
            <p className='flex my-auto text-xl mt-8'>{peopleRated}<BiLike className='text-blue-600 text-2xl'></BiLike></p>
            <Link to={`chef/${chef.id}`}><button  className='btn btn-outline btn-info mt-6'>View Recipes</button></Link>
            </div>
            </div>
        </div>
    );
};

export default ChefInfo;