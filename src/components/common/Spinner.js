import React from 'react';
import PropTypes from "prop-types";
import {css} from '@emotion/core';
import {ClipLoader} from "react-spinners";

const Spinner = ({loading}) => {
    const styles = css`
        display: block;
        margin: auto 40%;
        border-color: black;
    `;
    return (
        <div className='sweet-loading'>
            <ClipLoader
                css={styles}
                sizeUnit={"px"}
                size={100}
                color={'black'}
                loading={loading}/>
        </div>
    );
};

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default Spinner;
