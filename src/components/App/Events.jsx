import React from 'react';
import hmw from '../Assets/hmw2.png'

class Events extends React.Component {
    render() {
        return (
    <div class="slide" >
   <div className="desc" style={{"font-size":"1.5em", "margin":"2%"}}>
            <h1>Get Support to manage your health</h1>
            <h4>Learn more at Health my way</h4>
            <p>When：Prospond due to covid</p>
            <p>Where: Indooroopilly Activity Hub & The Exchange Communify, Kelvin Grove </p>
            <img src={hmw} alt="health my way goodthing foundation and be connected, delivered by digiclub at communify kelvin grove the exchange and Indooroopilly Activity Hub"  style={{"width":"420px"}}/>
    </div>
    </div>

        );
    }
}


export default Events;
