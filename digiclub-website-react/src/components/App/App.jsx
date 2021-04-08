import React from 'react';
import Header from '../Header/Header';


import './App.css';

class App extends React.Component {
    state = {
        headerText: 'This is DigiClubs Website!!',
    };
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default App;
