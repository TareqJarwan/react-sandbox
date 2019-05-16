import React, {Component} from 'react';
import ReactTable from "react-table";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import * as markActions from "../../store/actions/markActions";

import 'react-table/react-table.css';

class ShowMarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: true,
        }
    }

    componentDidMount() {
        this.props.getMarks();
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const columns = [
            {
                Header: "Title",
                Cell: props => {
                    return (
                        <NavLink
                            to={"/marks/show?id=" + props.original.id}>{props.original.title} </NavLink>
                    )
                }
            },
            {
                Header: "Class",
                Cell: props => {
                    return (
                        <span> {props.original.class.grade} {props.original.class.section}</span>
                    )
                }
            },
            {
                Header: "Subject",
                Cell: props => {
                    return (
                        <span> {props.original.subject.name} </span>
                    )
                }
            },
            {
                Header: "Status",
                Cell: props => {
                    let status = props.original.exam.status === "قيد التصحيح";
                    let x = status ?
                        <span style={{color: 'red'}}> {props.original.exam.status} </span>
                        :
                        <span style={{color: 'green'}}> {props.original.exam.status} </span>;
                    return (
                        x
                    )
                }
            }
        ];

        if (this.state.admin) {
            const actions = {
                Header: "Actions",
                Cell: props => {
                    let status = props.original.exam.status === "قيد التصحيح";
                    let x = status ?
                        <a href={"/marks/add?id=" + props.original.id} className="btn btn-info m-1">
                            <i className="fa fa-check"/> Correct
                        </a>
                        :
                        <a href={"/marks/edit?id=" + props.original.id} className="btn btn-secondary m-1">
                            <i className="fa fa-pencil"/> Update
                        </a>;
                    return (
                        x
                    )
                },
                sortable: false,
                width: 120,
                maxWidth: 120,
                minWidth: 120
            };
            columns.push(actions);
        }

        return (
            <div className="jumbotron bg-light">
                <ReactTable id="posts-table"
                            columns={columns}
                            defaultPageSize={5}
                            data={this.props.marks}
                            noDataText="No data available in table"
                            filterAll/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        marks: state.mark.marks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMarks: () => dispatch(markActions.getMarks()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMarks);
