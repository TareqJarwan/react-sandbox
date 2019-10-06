import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FormattedMessage} from "react-intl";

const Button = ({id, name, defaultMessage, type, disabled, classes, direction, onClick}) => {
    return (
        <>
            <FormattedMessage id={id} defaultMessage={defaultMessage}>
                {
                    value => (
                        <input type={type}
                               name={name}
                               value={value}
                               disabled={disabled}
                               onClick={onClick}
                               className={classNames(
                                   classes,
                                   {'rtl-direction': direction === 'rtl'},
                                   {'ltr-direction': direction === 'ltr'}
                               )}/>
                    )
                }
            </FormattedMessage>
        </>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    defaultMessage: PropTypes.string,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.string,
    direction: PropTypes.string,
    classes: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'button'
};

export default Button;
