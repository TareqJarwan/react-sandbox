import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerInputField = ({lang, startDate, handleChange, placeholder}) => {
    return (
        <DatePicker
            locale={lang}
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={handleChange}
            className="form-control"
            showMonthDropdown
            showYearDropdown
            placeholderText={placeholder}
            dropdownMode="select"/>
    );
};

DatePickerInputField.propTypes = {
    lang: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date),
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default DatePickerInputField;
