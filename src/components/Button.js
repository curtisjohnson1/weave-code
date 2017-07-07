import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className="contact-buttons">{props.text}
            <img src={props.source} alt="Save icon" />
        </button>
    );
};

Button.propTypes = {
    source: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired  
};

export default Button;