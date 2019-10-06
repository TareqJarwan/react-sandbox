import React, {Component} from "react";
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";

import Navbar from "../dashborad/NavBar";
import TextFieldGroup from "../common/TextFieldGroup";
import * as actions from "../../store/actions/authActions";
import Button from "../common/Button";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    onSubmit = (event) => {
        event.preventDefault();
        const creds = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(creds);
        this.props.signIn(creds);
    };

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <div className="login">
                <div className="container rtl">
                    <div className="row mt-5">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center mb-4">
                                <FormattedMessage id="signIn.title" defaultMessage="Sign In"/>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup type="email"
                                                id="signIn.email"
                                                defaultMessage="Email Address"
                                                direction={this.props.direction}
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}/>
                                <br/>
                                <TextFieldGroup type="password"
                                                id="signIn.password"
                                                defaultMessage="Password"
                                                direction={this.props.direction}
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}/>

                                <Button type="submit"
                                        id="signIn.submit"
                                        name="submit"
                                        defaultMessage="Submit"
                                        classes="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        direction: state.locale.direction
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(actions.signIn(creds)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
