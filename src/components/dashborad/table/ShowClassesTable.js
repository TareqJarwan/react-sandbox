import React, {Component} from 'react';
import ReactTable from "react-table";
import {connect} from "react-redux";

import * as classActions from "../../../store/actions/classAction";

class ShowClassesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: true,
        }
    }

    componentDidMount() {
        this.props.getClasses();
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const columns = [
            {
                Header: "Class Name",
                Cell: props => {
                    return (
                        <span>{props.original.grade} {props.original.section}</span>
                    )
                }
            },
            {
                Header: "Status",
                Cell: props => {
                    let status = props.original.isTableBuilt;
                    let x = status ?
                        <span style={{color: 'red'}}> Not Built </span>
                        :
                        <span style={{color: 'green'}}> Built </span>;
                    return (
                        x
                    )
                },
                accessor: "body",
                width: 300,
                maxWidth: 300,
                minWidth: 300
            },
            {
                Header: "Actions",
                Cell: props => {
                    let status = props.original.isTableBuilt;
                    let x = status ?
                        <a href={"/table/build?id=" + props.original.id} className="btn btn-info m-1">
                            <i className="fa fa-check"/> Build
                        </a>
                        :
                        <a href={"/table/edit?id=" + props.original.id} className="btn btn-secondary m-1">
                            <i className="fa fa-pencil"/> Update
                        </a>;
                    return (
                        x
                    )
                },
                sortable: false,
                style: {
                    textAlign: "center"
                },
            }
        ];

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <ReactTable id="posts-table"
                                columns={columns}
                                defaultPageSize={5}
                                data={this.props.classes}
                                noDataText="No data available in table"
                                filterAll/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        classes: state.class.classes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getClasses: () => dispatch(classActions.getClasses())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowClassesTable);
