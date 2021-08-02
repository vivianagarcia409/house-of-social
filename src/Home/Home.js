import React from 'react';
import './Home.css';
import cake from '../images/HOS-cake.jpeg';
import blue from '../images/bluespace-spread.jpeg';
import bridal from '../images/bridal-spread.jpg';

function Home(props) {
    return (
        <div>
            <h1 className="carousel">this will be the photo carousel</h1>

            <div className="hos-intro">
            HOUSE OF SOCIAL IS A SOUTH FLORIDA BASED EVENT PLANNING COMPANY 
            WHOSE MAIN GOAL IS TO EXCEED OUR CLIENT’S WILDEST DREAMS WHEN 
            DELIVERING THE BEST SOCIAL EXPERIENCE. FROM BEGINNING TO END, 
            WE ARE HERE FOR YOU.
            </div>

            <div className="about-homepage">

                <img className="hos-about" src={cake} alt="hos-about" />

            </div>

            <div className="services-homepage">

                <img className="blue-service" src={blue} alt="blue-service" />

            </div>

            <div className="reviews-homepage">

                <img className="bridal-spread" src={bridal} alt="bride-spread" />
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
    );
}

export default Home;