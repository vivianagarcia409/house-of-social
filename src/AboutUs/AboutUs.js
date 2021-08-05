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
            and management services for a broad range of clients which include social, 
            corporate, and non-profit events.
            <br />
            <br />
            Women-owned and operated, Samantha Santos and Daniella Gonzalez, House of 
            Social was conceived in 2020 when two industry professionals came together 
            to create unique experiences. Sam and Daniella met when they worked together 
            at a marketing agency in South Florida, creating activations and producing 
            galas for clients that serviced a range of 800 to thousands of attendees.
            <br />
            <br />
            Branching out on their own, House of Social has serviced social and corporate 
            clients. Their unique strategy is to personalize each experience, cater to individual 
            requests, and inspire other attendees with their ingenuity and creativity. 

            </div>

            <div className="individuals">
                <img src={lela} className="lela" alt="lela" />

            </div>



        </div>
    );
}

export default AboutUs;