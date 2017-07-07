import React, { Component } from 'react';

import logo from '../../public/images/logo.png';
import settings from '../../public/images/settings.png';
import NavItems from './NavItems';
import Searchbar from './Searchbar';

class Navbar extends Component {
    render () {
        return (
            <div className="nav-container">
                <div>
                    <header>
                        <span>
                            <span className="nav-logo"><img src={logo} /></span>
                            <Searchbar />
                            <span className="nav-login">
                                <a>Logged in: John Smith</a>
                                <img src={settings}/>
                            </span>
                        </span>
                    </header>
                </div>
                <NavItems />
            </div>

        );
    }
}
export default Navbar;