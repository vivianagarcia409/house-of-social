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
            house of social is a south florida based event planning company 
            whose main goal is to exceed client’s wildest dreams when 
            delivering the best social experience. from beginning to end, 
            we are here for you.
            </div>

            <div className="about-homepage">

                <img className="hos-about" src={cake} alt="hos-about" />

            </div>

            <div className="services-homepage">

                <img className="blue-service" src={blue} alt="blue-service" />

            </div>

            <div className="reviews-homepage">

                <img className="bridal-spread" src={bridal} alt="bride-spread" />
                <h1 className="reviews-link">reviews</h1>
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
    );
}

export default Home;