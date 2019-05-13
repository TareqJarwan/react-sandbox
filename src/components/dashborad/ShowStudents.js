import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import SelectListGroup from "../common/SelectListGroup";
import {connect} from "react-redux";

import * as actions from "../../store/actions/studentAction";
import {NavLink} from "react-router-dom";

class ShowStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            admin: true,
            class: '0'
        }
    }

    componentDidMount() {

        this.props.getStudents();
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    deleteRow = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const index = this.props.students.findIndex(student => {
                return student.id === id;
            });
            console.log(index);
            this.props.deleteStudent(index);
        }
    };

    render() {
        const columns = [
            {
                Header: "ID",
                Footer: "ID",
                accessor: "id",
                width: 200,
                maxWidth: 200,
                minWidth: 200,
                filterable: true
            },
            {
                Header: "Name",
                Footer: "Name",
                Cell: props => {
                    return (
                        <NavLink
                            to={"/student/show?id=" + props.original.id}>{props.original.fName} {props.original.lName}</NavLink>
                    )
                },
                filterable: true
            },
            {
                Header: "Class",
                Footer: "Class",
                Cell: props => {
                    return (
                        <span> {props.original.class.grade} {props.original.class.section}</span>
                    )
                },
                filterable: true
            },
            {
                Header: "Gender",
                Footer: "Gender",
                accessor: "sex",
                filterable: true
            },
            {
                Header: "Actions",
                Footer: "Actions",
                Cell: props => {
                    return (
                        <div>
                            <button className="btn btn-danger m-1" onClick={() => this.deleteRow(props.original.id)}>
                                <i className="fa fa-trash"/>
                            </button>
                            <a href={"/student/edit?id=" + props.original.id} className="btn btn-secondary m-1">
                                <i className="fa fa-pencil"/>
                            </a>
                        </div>
                    )
                },
                sortable: false,
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }
        ];

        const classes = [
            {label: '* Select Class', value: 0},
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
                    <form className="form-inline">
                        <div className="form-row align-items-center">
                            <div className="form-group">
                                <label htmlFor="class_id" className="mr-sm-2">Select Class :</label>
                                <SelectListGroup onChange={this.onChange}
                                                 value={this.state.class}
                                                 name="class"
                                                 options={classes}/>

                            </div>
                            <button type="submit" className="btn btn-info"><i className="fa fa-search"/></button>
                        </div>
                    </form>
                </div>

                <ReactTable id="students-table"
                            lassName="m-5"
                            columns={columns}
                            defaultPageSize={5}
                            data={this.props.students}
                            noDataText="No data available in table"
                            filterAll/>
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
        getStudents: () => dispatch(actions.getStudents()),
        deleteStudent: (id) => dispatch(actions.deleteStudent(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowStudents);