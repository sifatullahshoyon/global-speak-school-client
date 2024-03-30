import React, { useEffect, useState } from 'react';
import Container from '../../../components/shared/Container';
import { getAllFeature } from '../../../api/feature';
import Loader from '../../../components/shared/Loader';
import SimpleCard from '../../../components/shared/Card/SimpleCard';
import { useColorMode } from '@chakra-ui/react';

const Feature = () => {
    const [features , setFeatures] = useState([]);
    const [loading , setLoading] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();

    // if(colorMode){
    //     return toggleColorMode(!colorMode)
    // }

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
        <section className={`py-20 ${colorMode ? 'text-white' : 'bg-red-500'}`} >
            <Container>
                <div>
                    <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-center pb-5 tracking-wide text-gray-600'>Welcome to <span className='text-amber-600'>Global Speak School</span></h1>
                    <p className='text-center text-lg text-gray-500 tracking-wide font-semibold pb-10'>Dive into a world of language mastery with our tailored <br /> features, crafted to empower students in their journey at Global Speak School</p>
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