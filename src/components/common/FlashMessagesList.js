import React from 'react';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';

const FlashMessagesList = ({messages}) => {
    return (
        <div>
            {messages.map(message => (
                <FlashMessage key={message.id} message={message}/>
                ))}
        </div>
    )
};

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired
};

export default FlashMessagesList;