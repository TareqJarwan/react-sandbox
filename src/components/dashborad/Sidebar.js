import React from 'react';
import logo from '../../assets/react.svg';

const Sidebar = (props) => {
    return (
        <div className="bg-light border-right sticky-top" id="sidebar-wrapper">
            <a href='/' className="navbar-brand">
                <img src={logo} className="image img-fluid center mx-4 mt-1" style={{'width': "21%"}} alt="logo"/>
            </a>
            <div className="list-group list-group-flush">
                <a href="/" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="/" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="/" className="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="/" className="list-group-item list-group-item-action bg-light">Events</a>
                <a href="/" className="list-group-item list-group-item-action bg-light">Profile</a>
                <a href="/" className="list-group-item list-group-item-action bg-light">Status</a>
            </div>
        </div>
    );
};

export default Sidebar;