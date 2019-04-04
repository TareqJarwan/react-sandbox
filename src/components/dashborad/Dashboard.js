import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Student from "./Student";
import AddStudent from "./AddStudent";

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
                        <Route path="/student/show" exact component={Student}/>
                        <Route path="/student/add" exact component={AddStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;