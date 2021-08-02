import React, { useState } from 'react';
import './NavBar.css'
import logo from '../images/2.svg'



function NavBar(props) {


    return (
        <div className="navbar">

            <img className="logo-img" src={logo} alt="main-logo" />

       
         <ul className="nav-list">
             <li>Home</li>
             <li>About Us</li>
             <li>Contact</li>
             <li>Services</li>
             <li>Reviews</li>
         </ul>

        </div>
    );
}

export default NavBar;