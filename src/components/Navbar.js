import React, { Component } from 'react';

import logo from '../../public/images/logo.png';
import search from '../../public/images/search.png';
import settings from '../../public/images/settings.png';

class Navbar extends Component {
    render () {
        return (
            <div className="nav-container">
                <div>
                    <header>
                        <span>
                            <span className="nav-logo"><img src={logo} /></span>
                            <span className="searchbar">
                                <input className="nav-searchbar" type="text"/>
                                <img src={search} />
                            </span>
                            <span className="nav-login">
                                <a>Logged in: John Smith</a>
                                <img src={settings}/>
                            </span>
                        </span>
                    </header>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="">Home</a></li>|
                        <li><a href="">Projects</a></li>|
                        <li><a href="">News</a></li>|
                        <li><a href="">Careers</a></li>|
                        <li><a href="">Contact Us</a></li>|
                        <li><a href="">About Us</a></li>|
                        <li><a href="">Case Studies</a></li>|
                        <li><a href="">Blog</a></li>|
                        <li><a href="">Customers</a></li>
                    </ul>
                </div>
            </div>

        );
    }
}
export default Navbar;