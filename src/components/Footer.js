import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <footer>
                    <span className="footer-text">
                        <a href="">Terms and Conditions</a> |
                        <a href="">Privacy Policy</a> |
                        <a href="">Copyright Weave Code 2017</a>
                    </span>
                </footer>
            </div>
        );
    }
}

export default Footer;