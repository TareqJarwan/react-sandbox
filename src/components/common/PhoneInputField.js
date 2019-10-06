import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css'

const PhoneInputField = ({phone, handleChange}) => {
    return (
        <PhoneInput
            country="JO"
            placeholder="Enter phone number"
            value={phone}
            className="form-control"
            onChange={handleChange}/>
    );
};

PhoneInputField.propTypes = {
    phone: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default PhoneInputField;
