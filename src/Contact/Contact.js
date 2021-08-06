import React from 'react';
import './Contact.css'

function Contact(props) {
    
    //some backend function will go here
    
    return (
        <div className="contact-container">
            <h1 className="contact-us">- contact us -</h1>
            <div className="contact-ready">
                ready to start planning the event of your dreams? we're here to help!
            </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

            <form className="contact-us-form">
                <div className="form-group">
                    <input className="input-info" type="text" placeholder=" Name" name="name" required></input>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <input className="input-info" type="email" placeholder=" Email" name="email" required></input>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <input className="input-info" type="text" placeholder=" Phone Number" name="phone" required></input>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <textarea className="interested-in" type="text" placeholder=" I'm interested in" name="interest" required></textarea>
                </div>
                <br />
                <br />
                <div className="send-button">
                    <button type="submit">send</button>
                </div>
                <br />
            </form>
            <br />


        </div>
    );
}

export default Contact;