import React from 'react';
import './Header.css'


const Header = ({headTitle}) => {
    return(
        <div className="heade-container">
            <img
            src= ""
            className={`head-image`}
            alt="headerImage"/>
            <hi className={`head-text`}>{headTitle}</hi>
        </div>
    );
};



export default Header;