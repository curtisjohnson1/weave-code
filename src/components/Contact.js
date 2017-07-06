import React, { Component } from 'react';

import buttonEmail from '../../public/images/button-icon-email.png';
import buttonSkype from '../../public/images/button-icon-skype.png';
import buttonLive from '../../public/images/button-icon-livechat.png';
import mapHolder from '../../public/images/map-holder.png';

class Contact extends Component {
    render () {
        return (
            <div className="contact-container">
                <div className="banner-top">
                    <div className="banner-top-text">
                        <div>
                        <span className="text"><a>For more information...<br/><b>Contact Us</b></a></span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="contact-details">Send us your details to request our latest brochure</h1>
                </div>
                <div>
                    <span className='contact-map'>
                        <span><img className="map-holder" src={mapHolder}/></span>
                        <span className="contact-details-container">
                            <span className="contact-name">
                                <form>
                                    <a>First Name</a><br/>
                                    <input type="text"/><br/>
                                    <br/>
                                    <a>Last Name</a><br/>
                                    <input type="text"/><br/>
                                    <br/>
                                    <a>Date of Birth</a><br/>
                                    <select className="day">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    <select className="month">
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                    </select>
                                    <select className="year">
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </form>
                            </span>
                            <span className="contact-email">
                                <form>
                                    <a>Email</a><br/>
                                    <input type="text"/><br/>
                                    <br/>
                                    <a>Confirm Email</a><br/>
                                    <input type="text"/><br/>
                                    <br/><br/>
                                    <button className="contact-button">Submit</button>
                                </form>
                            </span>
                        </span>
                    </span>

                </div>
                <div>
                    <span className="contact-wrapper">
                        <span className="contact-tech">
                            <div className="contact-text">
                                <h3>Start a live chat with one <br/> of our Tech Team</h3>
                            </div>
                                <button className="contact-buttons">Start<img src={buttonLive} alt="Save icon"/></button>
                        </span>
                        <span className="contact-sales">
                            <div className="contact-text">
                                <h3>Start a Skype call with one of <br/> our Sales Team</h3>
                            </div>
                                <button className="contact-buttons">Start<img src={buttonSkype} alt="Save icon"/></button>
                        </span>        
                        <span className="contact-services">
                            <div className="contact-text">
                                <h3>Send an email to our <br/> Customer Services Team</h3>
                            </div>
                                <button className="contact-buttons">Send<img src={buttonEmail} alt="Save icon"/></button>
                        </span>
                    </span>
                </div>
                <div className="banner-bottom">
                    <div className="banner-bottom-text">
                        <span className="text"><a>We will be in touch<br/><b>Thank you</b></a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;