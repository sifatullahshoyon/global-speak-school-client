import React, { useEffect, useState } from 'react';
import Container from '../../../components/shared/Container';
import { getAllFeature } from '../../../api/feature';
import Loader from '../../../components/shared/Loader';
import SimpleCard from '../../../components/shared/Card/SimpleCard';

const Feature = () => {
    const [features , setFeatures] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getAllFeature()
        .then(data => {
            console.log('feature : 13' , data);
            setFeatures(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error.message);
        })
    } , []);

    if(loading){
        return <Loader />;
    };

    return (
        <section className='py-20 bg-slate-50'>
            <Container>
                <div>
                    <h1 className='text-xl md:text-3xl font-bold text-center mb-4 tracking-wide text-gray-600'>Welcome to <span className='text-amber-600'>Global Speak School</span></h1>
                    <p className='text-center text-lg text-gray-600 tracking-wide font-semibold pb-10'>Explore our top feature</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 mx-auto'>
                        {
                            features?.map(feature => <SimpleCard key={feature._id} feature={feature} />)
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Feature;