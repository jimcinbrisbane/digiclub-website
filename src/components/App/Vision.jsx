import React from 'react';
import hmw from '../Assets/hmw2.png'

class Card extends React.Component {
    render() {
        return (
        <div className="desc" style={{"width":"450px", "margin":"5px"}}>
            <i class={this.props.icon} style={{"font-size":"3em"}}></i>
            <h4>{this.props.title}</h4>
            <p>{this.props.text}</p>
    </div>

        );
    }
}

class Vision extends React.Component {
    render() {
        return (
        <div class="slide" id="vision">
        <div>&nbsp;</div>
            <h1 style={{"font-size":"1.5em", "margin":"2%"}}>Who we are</h1>
        <div>
            <p style={{"font-size":"1.5em", "margin":"2%"}}> We aims to improve digital accessibility for seniors. 
We focus our local activities on supporting people 
who are vulnerable in terms of wellness, health, 
social isolatio and to support students to develop 
innovative social projects, products, and digitally 
“agnostics” services.</p> 

            </div>
        <div style={{"display": "flex","justify-content": "center","flex-wrap": "wrap"}}>
        <Card icon="fa fa-eye"title="Our Vision" text="We are dedicated to improving the lives of those in our community. Your contribution today helps us make a difference."/>
        <Card icon="fa fa-flag" title="Our Mission" text="Our mission is to improve digital accessibility for seniors. We focus our local activities on supporting people who are vulnerable in terms of wellness, health, and social isolation."/>
        <Card icon="fa fa-calendar"title="Regular Event" text="Digital Support Drop-in Sessions Saturdays 2-4pm Indoorpily Activity Hub"/>
        </div>
        <div>
            <button  className="btn"> Call For Seniors</button> 
            <button  className="btn"> Call For Volunteers</button> 
        </div>
    </div>

        );
    }
}


export default Vision;
