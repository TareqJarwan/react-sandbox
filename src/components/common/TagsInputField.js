import React from 'react';
import './TagsStyles.css';
import {WithContext as ReactTags} from 'react-tag-input';

const TagsInputField = ({tags, suggestions, handleDelete, handleAddition}) => {

    const KeyCodes = {
        comma: 188,
        enter: 13,
    };
    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    return (
        <div>
            <ReactTags
                tags={tags}
                suggestions={suggestions}
                delimiters={delimiters}
                handleDelete={handleDelete}
                className="form-control"
                handleAddition={handleAddition}/>
        </div>
    );
};

export default TagsInputField;
