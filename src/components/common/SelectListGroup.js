import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SelectListGroup = ({name, value, error, info, onChange, options}) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>{option.label}</option>
    ));
    return (
        <div>
            <select name={name} value={value} onChange={onChange}
                    className={classNames('form-control mr-sm-2', {'is-invalid': error})}>
                {selectOptions}
            </select>
            {info && (<small className="form-text text-muted">{info}</small>)}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

export default SelectListGroup;