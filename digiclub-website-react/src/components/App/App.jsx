import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import './App.css';

class App extends React.Component {
    state = {
        headerText: 'This is DigiClubs Website!!',
    };
    render() {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}

export default App;
