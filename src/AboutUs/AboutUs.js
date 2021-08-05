import React from 'react';
import './AboutUs.css';
import lelasam from '../images/lela-sam.jpeg'
import lela from '../images/lela.jpeg'

function AboutUs(props) {
    return (
        <div className="about-container">
            <div className="about-img">
            <h1 className="meetus">
                - meet the girls -
            </h1>
                <img src={lelasam} className="lelasam" alt='lela and sam' />
            </div>
            <div className="about-them">
            House of Social is a full service event company offering production 
            and management services which include social, 
            corporate, and non-profit events.
            <br />
            <br />
            Women-owned and operated, Samantha Santos and Daniella Gonzalez, House of 
            Social was conceived in 2020 when two industry professionals came together 
            to create unique experiences. 
            <br />
            <br />
            Sam and Daniella met working together at a marketing
            agency in South Florida. Branching out on their own during the pandemic with House
            of Social, their unique strategy to personalize each experience and inspire other attendees
            with their ingenuity and creativity makes them stand out from the rest.

           
            </div>

            <div className="individuals">
                <img src={lela} className="lela" alt="lela" />

            </div>



        </div>
    );
}

export default AboutUs;