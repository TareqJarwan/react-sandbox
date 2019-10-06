import React from 'react';
import {NavLink} from "react-router-dom";
import './error.css';

const ErrorBoundary = ({error, errorInfo}) => {
    console.error(error);
    console.error(errorInfo);

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Something Went Wrong</h3>
                    <h1>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h1>
                </div>
                <h2>we are sorry, but the page you requested was not found!!</h2>
                <NavLink to="/dashboard" className="btn btn-lg btn-dark">Back to Dashboard</NavLink>
            </div>
        </div>
    );
};

export default ErrorBoundary;
