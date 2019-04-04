import React, {Component} from 'react';
import './App.css';
import Dashboard from "./components/dashborad/Dashboard";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Dashboard/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
