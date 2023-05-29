import React, { useState, useEffect } from 'react';
import './stylesheet/ourProject.css';
import back from '../Resources/back1.jpg'
import Button from './button';


const OurProject = ({ images, interval }) => {
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
                    <h4>OUR RECENT PROJECT</h4>
                </div>
                <div className='ourProjectText2'>
                    <h4>28 APR 2023</h4>
                    <h1>Exterior & <br></br> Interior</h1>
                </div>
                <div className='ourProjectText3'>
                    <p>We make your dream come true. Your interior is in our hand, and all you have left is to enjoy!</p>
                </div>
                <Button text='VIEW FULL PROJECT' path='/CommonPage' />
            </div>
        </div>
    );
};

export default OurProject;