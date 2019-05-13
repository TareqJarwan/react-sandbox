import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Sidebar from "./components/dashborad/Sidebar";
import NavBar from "./components/dashborad/NavBar";
import Calendar from "./components/dashborad/Calendar";
import Student from "./components/dashborad/Student";
import Attendance from "./components/dashborad/Attendance";
import Gallery from "./components/dashborad/Gallery";
import ShowStudent from "./components/dashborad/ShowStudent";
import EditStudent from "./components/dashborad/EditStudent";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuthorized: true
        }
    }

    render() {
        const {isAuthorized} = this.state;
        const authLinks = (
            <div className="d-flex" id="wrapper">
                <Sidebar/>

                <div id="page-content-wrapper">
                    <NavBar/>
                    <div className="container-fluid my-4">
                        <Switch>
                            <Route path="/dashboard" exact component={Calendar}/>
                            <Route path="/student" exact component={Student}/>
                            <Route path="/attendance" exact component={Attendance}/>
                            <Route path="/gallery" exact component={Gallery}/>
                            <Route path="/student/show" exact component={ShowStudent}/>
                            <Route path="/student/edit" exact component={EditStudent}/>
                            <Redirect to="/dashboard"/>
                        </Switch>
                    </div>
                </div>
            </div>
        );

        const guestLinks = (
            <div className="d-flex" id="wrapper">
                <div id="page-content-wrapper">
                    <NavBar/>
                    <div className="container-fluid my-4">
                        <Switch>
                            <Route path="/dashboard" component={Calendar}/>
                            <Route path="/student" component={Student}/>
                            <Route path="/attendance" component={Attendance}/>
                            <Route path="/gallery" component={Gallery}/>
                            <Redirect to="/dashboard"/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {isAuthorized ? authLinks : guestLinks}
            </div>
        );
    }
}

export default App;
