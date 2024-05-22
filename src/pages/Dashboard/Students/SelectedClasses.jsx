import axios from 'axios';
import React, { useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';

const SelectedClasses = ({params}) => {
    console.log(params)

    // console.log('selected class: 6' ,  classItem)
    // fetch(`${import.meta.env.VITE_API_URL}/classes/${params.id}`)
    // useEffect(() => {
    //    fetch(`http://localhost:5000/classes/${params.id}`)
    //    .then(res => res.json())
    //    .then(data => console.log(data))
    // } , []);
    return (
        <div>
            <p>My Selected Classes</p>
        </div>
    );
};

export default SelectedClasses;