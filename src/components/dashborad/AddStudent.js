import React, {Component} from 'react';
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import * as actions from "../../store/actions/studentAction";
import {connect} from "react-redux";

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nationalNumber: "",
            fName: "",
            lName: "",
            birthDate: "",
            profilePictureURL: "https://static.thenounproject.com/png/35778-200.png",
            sex: "0",
            class: '0',
            grade: '0',
            parents: [
                {
                    name: "",
                    sex: "",
                    title: "",
                    email: "",
                    mobile: "",
                    relative: ""
                }
            ],
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
        const studentData = {
            nationalNumber: this.state.nationalNumber,
            fName: this.state.fName,
            lName: this.state.lName,
            birthDate: this.state.birthDate,
            profilePictureURL: this.state.profilePictureURL,
            sex: this.state.sex,
            class: this.state.class,
            grade: this.state.grade,
            parents: []
        };
        console.log(studentData);
        this.props.createStudent(studentData);
    };

    render() {
        const {errors} = this.state;

        const sexOptions = [
            {label: '* Select Gander', value: 0},
            {label: 'Male', value: 'Male'},
            {label: 'Female', value: 'Female'},
            {label: 'Prefer Not To Say', value: 'Prefer not to say'}
        ];

        const grades = [
            {label: '* Grade', value: 0},
            {label: 'A', value: 'A'},
            {label: 'B', value: 'B'},
            {label: 'C', value: 'C'},
            {label: 'D', value: 'D'},
        ];

        const classes = [
            {label: '* Class', value: 0},
            {label: '1st', value: '1st'},
            {label: '2nd', value: '2nd'},
            {label: '3rd', value: '3rd'},
            {label: '4th', value: '4th'},
            {label: '5th', value: '5th'},
            {label: '6th', value: '6th'},
            {label: '7th', value: '7th'},
            {label: '8th', value: '8th'},
            {label: '9th', value: '9th'},
            {label: '10th', value: '10th'},
        ];

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <form onSubmit={this.onSubmit}>
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
                                                         options={classes}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-tel-input" className="col-2 col-form-label">Grade</label>
                                    <div className="col-10">
                                        <SelectListGroup placeholder="Grade"
                                                         name="grade"
                                                         value={this.state.grade}
                                                         onChange={this.onChange}
                                                         error={errors.grade}
                                                         options={grades}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-color-input" className="col-2 col-form-label"/>
                                    <div className="col-10">
                                        <input type="submit" value="Add Student" className="btn btn-info "/>
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
        students: state.student.students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createStudent: (studentData) => dispatch(actions.addStudent(studentData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);