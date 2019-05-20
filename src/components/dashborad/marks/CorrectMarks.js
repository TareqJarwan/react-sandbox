import React, {Component} from 'react';
import ReactTable from "react-table";
import {Link} from "react-router-dom";
import queryString from "query-string";
import {connect} from "react-redux";

import * as markActions from "../../../store/actions/markActions";
import TextFieldGroup from "../../common/TextFieldGroup";

class CorrectMarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: true,
            class: '',
            subject: '',
            exam: '',
            marks: [],
        }
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        this.props.getMark(params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.mark) {
            const mark = nextProps.mark;
            if (mark.class) {
                this.setState({
                    class: mark.class.grade + " - " + mark.class.section
                })
            }

            if (mark.subject) {
                this.setState({
                    subject: mark.subject.name
                })
            }
            this.setState({
                exam: mark.title,
                marks: Object.keys(mark.studentsMarks).map(i => mark.studentsMarks[i])
            });
            console.log(mark)
        }
    }

    onCellChange = (e, studentID, changedField) => {
        console.log(changedField)
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const columns = [
            {
                Header: "Student Name",
                accessor: "name",
                filterable: true
            },
            {
                Header: "Score",
                Cell: props => {
                    return (
                        <TextFieldGroup
                            type="text"
                            onChange={(event) => this.onCellChange(event, props.original.id, "score")}
                            value={props.original.actualScore}
                            name="actualScore"/>
                    )
                },
                accessor: "body",
                width: 300,
                maxWidth: 300,
                minWidth: 300
            },
            {
                Header: "Comments",
                Cell: props => {
                    return (
                        <TextFieldGroup
                            type="text"
                            onChange={(event) => this.onCellChange(event, props.original.id, "comment")}
                            value={props.original.comment}
                            name="comment"/>
                    )
                },
                sortable: false,
                style: {
                    textAlign: "center"
                },
            },
        ];

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <form onSubmit={this.onSubmit}>
                        <h2 className="text-center">Marks Info</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/marks" className="btn btn-light mb-3 float-left">
                                    <i className="fa fa-arrow-circle-left"> Back To Marks</i>
                                </Link>
                            </div>
                            <div className="col-md-6"/>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           className="col-2 col-form-label">Exam</label>
                                    <div className="col-10">
                                        <label htmlFor="example-text-input"
                                               className="col-form-label font-weight-bold">{this.state.exam}</label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-search-input"
                                           className="col-2 col-form-label">Class</label>
                                    <div className="col-10">
                                        <label htmlFor="example-text-input"
                                               className="col-form-label font-weight-bold">{this.state.class}</label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-email-input"
                                           className="col-2 col-form-label">Subject</label>
                                    <div className="col-10">
                                        <label htmlFor="example-text-input"
                                               className="col-form-label font-weight-bold">{this.state.subject}</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <ReactTable id="posts-table"
                                    columns={columns}
                                    defaultPageSize={5}
                                    data={this.state.marks}
                                    noDataText="No data available in table"
                                    filterAll/>


                        <div className="form-group row mt-3">
                            <div className="col-1">
                                <input type="submit" value="Add Marks" className="btn btn-info "/>
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
        mark: state.mark.mark
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMark: (id) => dispatch(markActions.getMark(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CorrectMarks);
