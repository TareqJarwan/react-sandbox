import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FlashMessage = ({message}) => {
    return (
        <>
            {
                message ?
                    <div className={classnames('alert', {
                        'alert-success': message.type === 'success',
                        'alert-danger': message.type === 'error'
                    })}>
                        {message.text}
                    </div>
                    : null
            }
        </>
    )
};

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired
};

export default FlashMessage;