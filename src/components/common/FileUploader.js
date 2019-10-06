import React from 'react';
import PropTypes from 'prop-types';

const FileUploader = ({name, id, type, accept, onChange, multiple, placeholder}) => {
    return (
        <div className="custom-file">
            <input type={type}
                   id={id}
                   name={name}
                   accept={accept}
                   multiple={multiple}
                   onChange={onChange}
                   className='custom-file-input'/>
            <label className="custom-file-label" htmlFor={id}>{placeholder}</label>
        </div>
    );
};

FileUploader.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    accept: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool.isRequired
};

FileUploader.defaultProps = {
    type: 'file',
    placeholder: 'Choose file...'
};

export default FileUploader;
