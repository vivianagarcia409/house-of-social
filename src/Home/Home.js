import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import cake from '../images/HOS-cake.jpeg';
import blue from '../images/bluespace-spread.jpeg';
import bridal from '../images/bridal-spread.jpg';

function Home(props) {
    return (
        <div>
            <h1 className="carousel">this will be the photo carousel</h1>

            <div className="hos-intro">
            <b>house of social</b> is a south florida based event planning company 
            whose main goal is to exceed client’s wildest dreams when 
            delivering the best social experience. from beginning to end, 
            we are here for you.
            </div>

            <div className="about-homepage">

                <img className="hos-about" src={cake} alt="hos-about" />
                <Link to="/about-us" className="about-link">about</Link>
            </div>

            <div className="services-homepage">

                <img className="blue-service" src={blue} alt="blue-service" />
                <Link to="/services" className="services-link">services</Link>

            </div>

            <div className="reviews-homepage">

                <img className="bridal-spread" src={bridal} alt="bride-spread" />
                <Link to="/reviews" className="reviews-link">reviews</Link>
            
            </div>
        
        
        
        
        
        
        
        
        
        
        
        </div>
        
    );
}

export default Home;