import React from 'react';
import './Services.css';

function Services(props) {
    return (
        <div className="services-container">
            <div className="services-title">
                - services -
            </div>

            <div className="offer">
                we offer three tiers of services to help build your dream event
            </div>

            <div className="day-of">

                <h3 className="day-of-title">
                    day of coordination
                </h3>
                <div className="description">
                coordination service of Daniella & Sam, themselves. includes 
                overseeing vendor load-in & production set up of the event space, 
                coordination with caterer/hotel/venue to allocate servers for event 
                logistics, processional lineup, cueing of entertainment, and vendor 
                load-out check-in
                </div>
            </div>

            <div className="final-dayof">

                <h3 className="final-title">
                    final moments + day of coordination
                </h3>
                <div className="description">
                check in with each vendor to make sure all services are guaranteed, 
                site tour at the venue to pre-arrange and double check the event flow, 
                detailed timeline discussion with the client to make sure all timing is 
                correctly estimated and all detailed considered, ceremony rehearsal 
                (if needed), budget allocation analysis, vendor recommendations, + day 
                of coordination + team of (3) for day of coordination
                </div>
            </div>

            <div className="full-service">
                <h3 className="full-title">
                    full-service
                </h3>
                <div className="description">
                venue walkthroughs, important vendor meetings, vendor negotiations including 
                availabilities and pricing discussion with all vendors, room block inquiries 
                (if needed), unlimited emails and phone call communications, assistant in design 
                elements including floral & decor, invitation, etc. + team of (4) for day of 
                coordination
                </div>

            </div>
        </div>
    );
}

export default Services;