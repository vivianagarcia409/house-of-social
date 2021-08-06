import React from 'react';
import './Reviews.css';
import proposal from '../images/blue-engagement.jpg'
import carly from '../images/carly.jpg'

function Reviews(props) {
    return (
        <div className="reviews-container">

                <div className="reviews-title">
                    - reviews -
                </div>

                <div className="blue-engagement">

                    <img src={proposal} className="proposal-img" />
                    <h3 className="proposal-review">
                    Simply put: This dynamic duo does NOT disappoint.
                    <br />
                    <br />
                    I contacted Daniella and Samantha to help me plan a surprise 
                    engagement in late December 2020 with a half-baked proposal idea 
                    and a ring burning a hole in my pocket.  Admittedly, I can be a 
                    persnickety person, especially when it came to the details in myself 
                    finally proposing. I'm happy to report these two relished in it! What 
                    a relief! No detail was overlooked, my ideas were encouraged and often 
                    times bolstered by their experience in such matters. The engagement took 
                    place flawlessly. I mean,  Daniella was crying (as my fiancé was) right 
                    after I popped the question because I asked her to capture the moment. 
                    The vibe, care, and involvement that led to that very moment was as 
                    genuine as it was beautiful.
                    <br />
                    Thank you for your help in setting the stage for a life-long and deeply 
                    cherished memory. Till next time. 
                    <br />
                    <br />
                    - Bradley Perez, <i>Google Review</i>
                    </h3>
                 </div>

                 <div className="breakpoint">

                    - 
  
                 </div>

                 <div className="carly-container">
                 <img src={carly} className="carly-img" />
                    <h3 className="kristen-review">
                    House of Social helped me plan an amazing celebration for my Mom’s birthday. 
                    They went above and beyond to create the most beautiful event space and took 
                    care of all the details! High recommend!
                    <br />
                    <br />
                    - Kristen Vargas Vila, <i>Google Review</i>
                    </h3>
                 </div>




        </div>
    );
}

export default Reviews;