import React, { Component } from 'react';

import buttonEmail from '../../public/images/button-icon-email.png';
import buttonSkype from '../../public/images/button-icon-skype.png';
import buttonLive from '../../public/images/button-icon-livechat.png';
import mapHolder from '../../public/images/map-holder.png';

import ContactForm from './ContactForm';
import Button from './Button';

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
                        <ContactForm />
                    </span>

                </div>
                <div>
                    <span className="contact-wrapper">
                        <span className="contact-tech">
                            <div className="contact-text">
                                <h3>Start a live chat with one <br/> of our Tech Team</h3>
                            </div>
                                <Button text='Start' source={buttonLive}/>
                        </span>
                        <span className="contact-sales">
                            <div className="contact-text">
                                <h3>Start a Skype call with one of <br/> our Sales Team</h3>
                            </div>
                                <Button text='Start' source={buttonSkype} />
                        </span>        
                        <span className="contact-services">
                            <div className="contact-text">
                                <h3>Send an email to our <br/> Customer Services Team</h3>
                            </div>
                                <Button text='Send' source={buttonEmail}/>
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