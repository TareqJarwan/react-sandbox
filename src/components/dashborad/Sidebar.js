import React from 'react';
import logo from '../../assets/react.svg';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="d-flex" id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <Link to='/' className="navbar-brand list-group-item list-group-item-action bg-light">
                        <img src={logo} className="image img-fluid center mx-4 mt-1" style={{'width': "21%"}}
                             alt="logo"/>
                    </Link>
                    <Link to="/dashboard"
                          className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/student"
                          className="list-group-item list-group-item-action bg-light">Student</Link>
                    <Link to="/marks"
                          className="list-group-item list-group-item-action bg-light">Manage Marks</Link>
                    <Link to="/attendance"
                          className="list-group-item list-group-item-action bg-light">Attendance</Link>
                    <Link to="/class"
                          className="list-group-item list-group-item-action bg-light">Class</Link>
                    <Link to="/table"
                          className="list-group-item list-group-item-action bg-light">Table</Link>
                    <Link to="/event"
                          className="list-group-item list-group-item-action bg-light">Events</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
