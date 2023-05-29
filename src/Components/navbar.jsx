import React from 'react';
import './navbar.css';
import logo from '../Resources/logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
return (
<nav className="navbar">
    <div className='logo'>
        <img src={logo} alt="logo" id='logo' />
    </div>
    <ul className="navbar-nav">
        <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a href="#AboutUs" className="nav-link">About</a>
        </li>
        <li className="nav-item">
            <a href="#ourProjects" className="nav-link">Portfolio</a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">Inspiration</a>
        </li>
    </ul>
    <div className='contactUs'>
        <button className='contactUsBtn'
            onClick={()=>{
                navigate('/FeedBack');
            }}
        >Contact Us</button>
    </div>
</nav>
);
};

export default Navbar;
