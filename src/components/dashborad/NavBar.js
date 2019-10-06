import React, {Component} from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import {connect} from "react-redux";
import * as actions from "../../store/actions/localeAction";

class NavBar extends Component {

    onSelectFlag = (countryCode) => {
        if (countryCode === "SA") {
            this.props.setLocale('ar', 'rtl');
        } else if (countryCode === "US") {
            this.props.setLocale('en', 'ltr');
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ReactFlagsSelect className="menu-flags navbar-nav ml-auto mt-2 mt-lg-0 mr-5"
                                      defaultCountry="US"
                                      countries={["US", "SA"]}
                                      customLabels={{"US": "English", "SA": "Arabic"}}
                                      placeholder="Select Language"
                                      showSelectedLabel={false}
                                      onSelect={this.onSelectFlag}/>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLocale: (lang, direction) => dispatch(actions.setLocale(lang, direction))
    }
};

export default connect(null, mapDispatchToProps)(NavBar);
