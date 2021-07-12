import React from 'react';
import './Landing.css';
import senior from "./../../components/Assets/senior.jpeg";

const Landing = () => {
    return (
        // This is the Major part for the imga and buttons
        
        <div className="landing-container">
            <div className="background-image">
                 <img className="flash-image" src={senior} alt="hero" />
            </div>
        </div>
        
    );
}

export default Landing;