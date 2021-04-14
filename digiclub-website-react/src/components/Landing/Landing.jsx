import React from 'react';
import './Landing.css';
import senior from "./../../components/Assets/senior.jpeg";

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-left">
                <h1 className="landing-text">Can you type... </h1>
                <div className="typewriter-container">
                    <p>Fast?</p>
                    <p>Correct?</p>
                    <p>Quick?</p>
                </div>
            </div>
            <div className="landing-right">
                <img className="senior-image" src={senior} alt="hero" />
            </div>

        </div>
    )
}

export default Landing;