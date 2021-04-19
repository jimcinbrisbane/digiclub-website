import React from 'react';
import Contact from '../Contact/Contact';
import MoreInfro from '../FAQ/MoreInformation';
import Footer from '../Footer/Footer';
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

                {/*Contact Section */}
                <Contact />
                {/*More Infromatio */}
                <MoreInfro />
                {
                /*Footer*/}
                <Footer />

            </div>
        );
    }
}


export default App;
