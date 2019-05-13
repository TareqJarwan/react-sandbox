import React, {Component} from 'react';
import queryString from 'query-string';
import {connect} from "react-redux";
import * as actions from "../../store/actions/studentAction";
import {Link} from "react-router-dom";

class ShowStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true
        };
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        this.props.getStudent(params.id);
    }

    render() {
        const {student} = this.props;
        let grade, profilePictureURL = "";
        if (student) {
            let item = student.class;
            profilePictureURL = student.profilePictureURL;
            if (item) {
                grade = item.grade + " " + item.section;
                console.log(grade);
            }
        }
        console.log(student, profilePictureURL);

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <h2 className="text-center">Student Info</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/student" className="btn btn-light mb-3 float-left">
                                <i className="fa fa-arrow-circle-left"> Back To Students</i>
                            </Link>
                        </div>
                        <div className="col-md-6"/>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-3 col-form-label">First Name</label>
                                <div className="col-9">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{student.fName}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-search-input"
                                       className="col-3 col-form-label">Last Name</label>
                                <div className="col-9">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{student.lName}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-email-input"
                                       className="col-3 col-form-label">National Number</label>
                                <div className="col-9">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{student.nationalNumber}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-url-input"
                                       className="col-3 col-form-label">Birth Of Date</label>
                                <div className="col-9">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{student.birthDate}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-tel-input" className="col-3 col-form-label">Sex</label>
                                <div className="col-9">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{student.sex}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-tel-input" className="col-3 col-form-label">Class</label>
                                <div className="col-9">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{grade}</label>
                                </div>
                            </div>
                            {this.state.isAdmin ?
                                <div className="form-group row">
                                    <label htmlFor="example-color-input" className="col-3 col-form-label"/>
                                    <div className="col-2 mr-2">
                                        <input type="submit" value="Edit Student" className="btn btn-secondary "/>
                                    </div>
                                    <div className="col-2">
                                        <input type="submit" value="Delete Student" className="btn btn-danger "/>
                                    </div>
                                </div>
                                : null}
                        </div>
                        <div className="col-md-4">
                            <label className="d-block mb-2">Profile Picture</label>
                            <img alt={profilePictureURL}
                                 src={"https://cdn3.vectorstock.com/i/thumb-large/98/17/kid-child-boy-avatar-faceless-vector-13939817.jpg"}
                                 id="target"
                                 style={{
                                     "border": "1px solid #ccc",
                                     "width": "200px",
                                     "height": "200px"
                                 }}
                                 className="rounded-circle p-1 mx-auto d-block mb-2"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        student: state.student.student
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getStudent: (studentID) => dispatch(actions.getStudent(studentID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowStudent);