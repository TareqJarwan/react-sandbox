import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Student from "./Student";
import Attendance from "./Attendance";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="d-flex" id="wrapper">
                <Sidebar/>

                <div id="page-content-wrapper">
                    <Navbar/>
                    <div className="container-fluid my-4">
                        <Route path="/student" exact component={Student}/>
                        <Route path="/attendance" exact component={Attendance}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;