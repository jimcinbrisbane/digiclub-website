import React from 'react';
import Landing from '../Landing/Landing';
import Navbar from '../Navbar/Navbar';


import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* Nav Section*/}
                <Navbar />
                {/*Landing Section*/}
                <Landing />

            </div>
        );
    }
}

export default App;
