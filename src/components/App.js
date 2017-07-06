import React, { Component } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

class App extends Component {
    render () {
        return (
            <div className="app">
                <Navbar />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;