import React, { useEffect, useState } from 'react';

const ChefsCard = () => {
    const [chef,setChef]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefsData')
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(error=>console.error(error))
    },[])

    return (
        <div>
            <h4>all chefs are here</h4>
        </div>
    );
};

export default ChefsCard;