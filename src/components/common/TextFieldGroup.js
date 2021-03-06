import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextFieldGroup = ({name, placeholder, value, label, error, info, type, onChange, disabled}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} name={name}
                   value={value} onChange={onChange} disabled={disabled}
                   className={classNames('form-control', {'is-invalid': error})}/>
            {info && (<small className="form-text text-muted">{info}</small>)}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;