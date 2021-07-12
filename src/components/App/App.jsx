import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import Events from './Events'
import Vol from './Vol'
import Vision from './Vision'
import './App.css';
import './Navbar.css'
import  Call2act from './Call2act'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
  } from "react-router-dom";

class App extends React.Component {
  changeStyles = () => {
    let element = document.getElementById('.bg-img')
    ReactDOM.findDOMNode(element).style.backgroundImage = this.state.isClicked?true : 'white'
}
    render() {
        return (

<Router>

    <div className="App bg-img" >
            <div className="container">
                <div className="nav navbar">
                <a href="https://www.facebook.com/digiclubforseniors/" className="tab" style={{"float":"left"}}> <i class="fab fa-facebook"></i></a> 
                <a href="https://www.linkedin.com/company/digiclub-for-seniors/?originalSubdomain=au"className="tab" style={{"float":"left"}}> <i class="fab fa-linkedin"></i></a> 

                <Link class="tab" style={{"float":"right"}} to="/"><i class="fas fa-home"> </i> Home</Link>
                <Link class="tab" style={{"float":"right"}} to="/vol"><i class="fas fa-people-carry"></i> Call For Volunteers</Link>
                <Link class="tab" style={{"float":"right"}} to="/events"><i class="fas fa-calendar"></i> Events</Link>
                <Link class="tab" style={{"float":"right"}} to="/vision" ><i class="fas fa-eye"></i> Our Vision </Link>

                {/* <img className="flash-logo" src={logo} alt="logo" /> */}
                </div>




        </div>
    <Switch>
          <Route path="/vol">
          <Vol />
          </Route>
          <Route path="/events">
          <Events />
          </Route>
          <Route path="/vision">
          <Vision />
          </Route>
          <Route path="/">
          <Call2act />
          </Route>

          
        </Switch>
    </div>
    </Router>


        );
    }
}


export default App;
