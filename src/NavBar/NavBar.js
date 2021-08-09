import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from '../images/houseofsocial.png'



function NavBar(props) {


    return (
        <div className="navbar">

        <Link to="/"> <img className="logo-img" src={logo} alt="main-logo" /> </Link>

       
         <div className="links">

         <Link to="/" className="link-button">home</Link>
         <Link to="/about-us" className="link-button">about</Link>
         <Link to="/services" className="link-button">services</Link>
         <Link to="/reviews" className="link-button">reviews</Link>
         <Link to="/contact-us" className="link-button">contact</Link>

             </div>

        </div>
    );
}

export default NavBar;