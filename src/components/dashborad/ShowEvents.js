import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import ReactTable from "react-table";

import * as eventActions from "../../store/actions/eventActions";

class ShowEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: true
        }
    }

    componentDidMount() {
        this.props.getEvents();
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    deleteRow = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const index = this.props.events.findIndex(student => {
                return student.id === id;
            });
            console.log(index);
            this.props.deleteStudent(index);
        }
    };

    render() {
        const columns = [
            {
                Header: "Name",
                Footer: "Name",
                Cell: props => {
                    return (
                        <NavLink
                            to={"/event/show?id=" + props.original.id}>{props.original.title}</NavLink>
                    )
                }
            },
            {
                Header: "Level",
                Footer: "Level",
                accessor: "level",
                style: {
                    textAlign: "center"
                },
            },
            {
                Header: "Date",
                Footer: "Date",
                accessor: "date"
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
                            <a href={"/event/edit?id=" + props.original.id} className="btn btn-secondary m-1">
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

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <ReactTable id="students-table"
                                lassName="m-5"
                                columns={columns}
                                defaultPageSize={5}
                                data={this.props.events}
                                noDataText="No data available in table"
                                filterAll/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.event.events
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => dispatch(eventActions.getEvents()),
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvents);
