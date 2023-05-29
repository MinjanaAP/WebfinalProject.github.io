import React, { useState, useEffect } from 'react';
import './stylesheet/ourProject.css';
import back from '../Resources/back1.jpg'
import Button from './button';


const OurProjectInCommon = ({ images, interval,description }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // console.log(images[0]);
    useEffect(() => {
    const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
        clearInterval(timer);
    };
    }, [images.length, interval]);

    return (
        <div className="ourProjectContainer" id='ourProjects'>
            <div className='ourProjectImage'>
            <img src={images[currentImageIndex]}   alt="Auto Change Image" />
            </div>
            <div className='ourProjectText'>
                <div className='ourProjectTextHeading'>
                    
                </div>
                <div className='ourProjectText2'>
                    
                    <h1>Organic <br></br> Everything</h1>
                </div>
                <div className='ourProjectText3'>
                    <p>{description}</p>
                </div>
                <Button text='EXPLORE MORE' />
            </div>
        </div>
    );
};

export default OurProjectInCommon;