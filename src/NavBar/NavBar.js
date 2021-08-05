import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from '../images/2.svg'



function NavBar(props) {


    return (
        <div className="navbar">

        <Link to="/"> <img className="logo-img" src={logo} alt="main-logo" /> </Link>

       
         <div className="links">

         <Link to="/" className="link-button">Home</Link>
         <Link to="/about-us" className="link-button">About Us</Link>
         <Link to="/services" className="link-button">Services</Link>
         <Link to="/reviews" className="link-button">Reviews</Link>
         <Link to="/contact-us" className="link-button">Contact</Link>

             </div>

        </div>
    );
}

export default NavBar;