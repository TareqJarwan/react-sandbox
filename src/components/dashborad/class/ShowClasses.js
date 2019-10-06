import React, {Component} from 'react';
import ReactTable from "react-table";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import 'react-table/react-table.css';

import Spinner from "../../common/Spinner";
import * as classActions from '../../../store/actions/classAction';

class ShowClasses extends Component {
    constructor() {
        super();
        this.state = {
            admin: true,
        };
    }

    componentDidMount() {
        this.props.getClasses();
    }

    deleteRow = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            const index = this.props.classes.findIndex(item => {
                return item.id === id;
            });
            console.log(index);
            this.props.deleteClass(index);
        }
    };

    render() {
        const {classes, loading} = this.props;

        const grade = <FormattedMessage id="show.classes.grade" defaultMessage="Grade"/>;
        const section = <FormattedMessage id="show.classes.section" defaultMessage="Section"/>;
        const actionsHeader = <FormattedMessage id="show.classes.actions" defaultMessage="Actions"/>;

        const columns = [
            {
                Header: grade,
                Footer: grade,
                Cell: props => (
                    <NavLink to={"/class/show?id=" + props.original.id}>{props.original.grade}</NavLink>
                ),
                filterable: true,
                style: {
                    textAlign: "center"
                },
            },
            {
                Header: section,
                Footer: section,
                accessor: "section",
                filterable: true,
                style: {
                    textAlign: "center"
                },
            }
        ];

        if (this.state.admin) {
            const actions = {
                Header: actionsHeader,
                Footer: actionsHeader,
                Cell: props => (
                    <div>
                        <button className="btn btn-danger m-1" onClick={() => this.deleteRow(props.original.id)}>
                            <i className="fa fa-trash"/>
                        </button>
                        <a href={"/class/edit?id=" + props.original.id} className="btn btn-secondary m-1">
                            <i className="fa fa-pencil"/>
                        </a>
                    </div>
                ),
                sortable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                style: {
                    textAlign: "center"
                },
            };
            columns.push(actions);

        }

        if (loading) {
            return <Spinner loading={loading}/>
        }

        return (
            <div className="jumbotron bg-light">
                <ReactTable id="posts-table"
                            columns={columns}
                            defaultPageSize={5}
                            data={classes}
                            noDataText="No data available in table"
                            filterAll/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        classes: state.class.classes,
        loading: state.class.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getClasses: () => dispatch(classActions.getClasses()),
        deleteClass: (id) => dispatch(classActions.deleteClass(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowClasses);
