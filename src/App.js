import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {IntlProvider} from "react-intl";
import {connect} from "react-redux";

import Sidebar from "./components/dashborad/Sidebar";
import NavBar from "./components/dashborad/NavBar";
import Calendar from "./components/dashborad/Calendar";
import Student from "./components/dashborad/Student";
import Attendance from "./components/dashborad/Attendance";
import Event from "./components/dashborad/Event";
import ShowStudent from "./components/dashborad/ShowStudent";
import EditStudent from "./components/dashborad/EditStudent";
import Marks from "./components/dashborad/marks/Marks";
import ShowMarkTable from "./components/dashborad/marks/ShowMarkTable";
import CorrectMarks from "./components/dashborad/marks/CorrectMarks";
import Table from "./components/dashborad/table/Table";
import ShowTable from "./components/dashborad/table/ShowTable";

import ShowEvent from "./components/dashborad/ShowEvent";
import Class from "./components/dashborad/class/Class";
import SignIn from "./components/dashborad/SignIn";
import messages from "./messages";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {lang, direction, isAuthorized} = this.props;

        const authLinks = (
            <div className="d-flex" id="wrapper" dir={direction}>
                <Sidebar/>

                <div id="page-content-wrapper">
                    <NavBar/>
                    <div className="container-fluid my-4">
                        <Switch>
                            <Route path="/dashboard" exact component={Calendar}/>
                            <Route path="/student" exact component={Student}/>
                            <Route path="/attendance" exact component={Attendance}/>
                            <Route path="/marks" exact component={Marks}/>
                            <Route path="/marks/show" exact component={ShowMarkTable}/>
                            <Route path="/marks/correct" exact component={CorrectMarks}/>

                            <Route path="/event" exact component={Event}/>
                            <Route path="/class" exact component={Class}/>
                            <Route path="/event/show" exact component={ShowEvent}/>
                            <Route path="/table" exact component={Table}/>
                            <Route path="/table/build" exact component={ShowTable}/>


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
                            <Route path="/signIn" component={SignIn}/>
                            <Redirect to="/signIn"/>
                        </Switch>
                    </div>
                </div>
            </div>
        );

        console.log(this.props.firebase);
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    {isAuthorized ? authLinks : guestLinks}
                </div>
            </IntlProvider>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        lang: state.locale.lang,
        direction: state.locale.direction,
        firebase:state.firebase,
        isAuthorized: state.firebase.auth.uid !== null,
    }
};

export default connect(mapStateToProps)(App);
