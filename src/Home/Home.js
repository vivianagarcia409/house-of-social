import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {CarouselData} from './CarouselData.js';
import './Home.css';
import cake from '../images/HOS-cake.jpeg';
import blue from '../images/bluespace-spread.jpeg';
import bridal from '../images/bridal-spread.jpg';

function Home(props) {

    const slides = CarouselData
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

   console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }




    return (
        <div className="home-container">

                <div className="carousel-container">

                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

                    {CarouselData.map ((slide,index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} 
                            key = {index}>

                            {index === current && (
                                <img src={slide.image} className="slide-images" alt='carousel images' />
                            
                            )}
                            </div> )
                    })}
                </div>

                        <div className="hos-intro">
                        <b>house of social</b> is a south florida based event planning company 
                        whose main goal is to exceed client’s wildest dreams when 
                        delivering the best social experience. from beginning to end, 
                        we are here for you.
                        </div>

                <div className="about-links-container">
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
        
        
        
        
        
        
        
        
        </div>
        
    );
}

export default Home;