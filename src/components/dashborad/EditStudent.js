import React, {Component} from 'react';
import queryString from 'query-string';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import * as studentActions from "../../store/actions/studentAction";
import * as classActions from "../../store/actions/classAction";

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nationalNumber: "",
            fName: "",
            lName: "",
            birthDate: "",
            sex: "0",
            class: '0',
            grade: '0',
            parents: [],
            profilePictureURL: "https://static.thenounproject.com/png/35778-200.png",
            classesObj: [{label: '* Select Class', value: 0}],
            errors: {}
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onImageChange = (event, type) => {
        console.log(type);
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                if (type === 'pp') {
                    this.setState({profilePictureURL: e.target.result});
                } else if (type === 'cv') {
                    this.setState({cv: e.target.result});
                }
            };
            console.log(event.target.files[0]);
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        let params = queryString.parse(this.props.location.search);
        const studentData = {
            nationalNumber: this.state.nationalNumber,
            fName: this.state.fName,
            lName: this.state.lName,
            birthDate: this.state.birthDate,
            profilePictureURL: this.state.profilePictureURL,
            sex: this.state.sex,
            class: this.state.class,
            grade: this.state.grade,
            parents: this.state.parents
        };
        console.log(studentData);
        this.props.updateStudent(params.id, studentData);
        this.props.history.push('/student');
    };

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        this.props.getStudent(params.id);
        this.props.getClasses();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.classes) {
            const classes = nextProps.classes;
            let classesObj = [{label: '* Select Class', value: 0}];

            for (let i = 0; i < classes.length; i++) {
                classesObj.push({
                    label: classes[i].grade + " - " + classes[i].section,
                    value: classes[i].id
                });
            }

            this.setState({
                classesObj: classesObj
            });
        }

        if (nextProps.student) {
            const student = nextProps.student;
            if (student.class) {
                this.setState({
                    nationalNumber: student.nationalNumber,
                    fName: student.fName,
                    lName: student.lName,
                    birthDate: student.birthDate,
                    profilePictureURL: student.profilePictureURL,
                    sex: student.sex,
                    class: student.class.id
                })
            }
        }
    }

    render() {
        const {errors} = this.state;

        const sexOptions = [
            {label: '* Select Gander', value: 0},
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'},
            {label: 'Prefer Not To Say', value: 'Prefer not to say'}
        ];

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <form onSubmit={this.onSubmit}>
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
                                           className="col-2 col-form-label">First Name</label>
                                    <div className="col-10">
                                        <TextFieldGroup id="example-text-input"
                                                        type="text"
                                                        placeholder="* First Name"
                                                        name="fName"
                                                        value={this.state.fName}
                                                        onChange={this.onChange}
                                                        error={errors.fName}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-search-input"
                                           className="col-2 col-form-label">Last Name</label>
                                    <div className="col-10">
                                        <TextFieldGroup id="example-search-input"
                                                        type="text"
                                                        placeholder="* Last Name"
                                                        name="lName"
                                                        value={this.state.lName}
                                                        onChange={this.onChange}
                                                        error={errors.lName}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-email-input"
                                           className="col-2 col-form-label">National Number</label>
                                    <div className="col-10">
                                        <TextFieldGroup id="example-email-input"
                                                        type="text"
                                                        placeholder="* National Number"
                                                        name="nationalNumber"
                                                        value={this.state.nationalNumber}
                                                        onChange={this.onChange}
                                                        error={errors.nationalNumber}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-url-input"
                                           className="col-2 col-form-label">Birth Of Date</label>
                                    <div className="col-10">
                                        <TextFieldGroup id="example-url-input"
                                                        type="date"
                                                        placeholder="* birthDate"
                                                        name="birthDate"
                                                        value={this.state.birthDate}
                                                        onChange={this.onChange}
                                                        error={errors.birthDate}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-tel-input" className="col-2 col-form-label">Sex</label>
                                    <div className="col-10">
                                        <SelectListGroup id="example-tel-input"
                                                         placeholder="Sex"
                                                         name="sex"
                                                         value={this.state.sex}
                                                         onChange={this.onChange}
                                                         error={errors.sex}
                                                         options={sexOptions}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-tel-input" className="col-2 col-form-label">Class</label>
                                    <div className="col-10">
                                        <SelectListGroup placeholder="Class"
                                                         name="class"
                                                         value={this.state.class}
                                                         onChange={this.onChange}
                                                         error={errors.class}
                                                         options={this.state.classesObj}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-color-input" className="col-2 col-form-label"/>
                                    <div className="col-10">
                                        <input type="submit" value="Edit Student" className="btn btn-info "/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="d-block mb-2 font-weight-bold">Profile Picture</label>
                                <img alt={this.state.profilePictureURL}
                                     src={this.state.profilePictureURL}
                                     id="target"
                                     style={{
                                         "border": "1px solid #ccc",
                                         "width": "200px",
                                         "height": "200px"
                                     }}
                                     className="rounded-circle p-1 mx-auto d-block mb-2"/>

                                <input type="file"
                                       onChange={(event) => this.onImageChange(event, 'pp')}
                                       className="filetype"
                                       id="ppt"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        student: state.student.student,
        classes: state.class.classes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getStudent: (id) => dispatch(studentActions.getStudent(id)),
        updateStudent: (id, studentData) => dispatch(studentActions.updateStudent(id, studentData)),
        getClasses: () => dispatch(classActions.getClasses())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
