import React from 'react';
import './AboutUs.css';
import lelasam from '../images/lela-sam.jpeg'
import sam from '../images/sam.png'
import lela from '../images/lela2.png'

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
            Social was created in 2020 when two industry professionals came together 
            to create unique experiences. 
            <br />
            <br />
            Sam and Daniella met working together at a marketing
            agency in South Florida. Branching out on their own during the pandemic with House
            of Social, their unique strategy to personalize each experience and inspire other attendees
            with their ingenuity and creativity makes them stand out from the rest.

           
            </div>

            <div className="individuals">

                <div className="sam-container">
                    <h1 className="sam-title">
                        - Samantha Santos -
                    </h1>
                    
                     <img src={sam} className="sam" alt="sam" />

                    <div className="sam-statement">
                    “When the pandemic put the events industry on hold, 
                    I needed an outlet for my love of planning. It’s been 
                    a passion of mine for as long as I can remember and 
                    house of social became the space where I could pour 
                    my heart into what I love the most.”
                    </div>
                </div>  
           
                <div className="lela-container">
                        <h1 className="lela-title">
                            - Daniella Gonzalez -
                        </h1>
                        <img src={lela} className="lela" alt="lela" />
                    <div className="lela-statement">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum."
                    </div>
                </div> 
        
            
            </div>



        </div>
    );
}

export default AboutUs;