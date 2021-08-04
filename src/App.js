import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import {CarouselData} from './Home/CarouselData.js';
import NavBar from './NavBar/NavBar.js';
import AboutUs from './AboutUs/AboutUs.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import Reviews from './Reviews/Reviews.js';
import Services from './Services/Services.js';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
     
      

      <Switch>

        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about-us" render={(props) => <AboutUs {...props} />} />
        <Route exact path="/services" render={(props) => <Services {...props} />} />
        <Route exact path="/reviews" render={(props) => <Reviews {...props} />} />
        <Route exact path="/contact-us" render={(props) => <Contact {...props} />} />

      </Switch>
      
      <Footer />
      
    </div>
  );
}

export default App;
