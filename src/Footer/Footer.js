import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer-container">
                <div className="socials-links">

                    <a href="https://www.facebook.com/houseofsocialevents/" target="_blank" rel="noopener noreferrer" className = "facebook-link">
                <img className="facebook" src={facebook} alt="facebook" />
                    </a>

                    <a href="https://www.instagram.com/houseofsocialevents/" target="_blank" rel="noopener noreferrer" className = "instagram-link">
                <img className="instagram" src={instagram} alt="instagram" />
                    </a>


                </div>
                <div className="copyright">
                    Copyright © 2020 house of social events - All Rights Reserved.
                    <br/>info@houseofsocialevents.com
                    <br/>Miami based events company
                    </div>

        </div>
    );
}

export default Footer;