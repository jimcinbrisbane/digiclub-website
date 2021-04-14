import React from 'react';
import logo from './../../components/Assets/logo.png';
import './Navbar.css';

const Nav = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text"></p>
                </div>
                <div className="nav-right">
                    <a 
                    target="_blank"
                    className="nav-link"
                    href="https://github.com/natsumadan"
                    rel="noreferrer"
                    >
                        DIGICLUB
                    </a>


            </div>
        </div>
    );
}


export default Nav;