import React, {Component} from 'react';
import queryString from "query-string";
import ReactTable from "react-table";
import {connect} from "react-redux";
import * as classActions from "../../../store/actions/classAction";
import {Link} from "react-router-dom";

class ShowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: true,
            table: [
                {
                    day: "Sunday",
                    lesson1: {subject: "Math", from: "10:00", to: "11:00"},
                    lesson2: {subject: "", from: "", to: ""},
                    lesson3: {subject: "", from: "", to: ""},
                    lesson4: {subject: "", from: "", to: ""},
                    lesson5: {subject: "", from: "", to: ""},
                    lesson6: {subject: "", from: "", to: ""},
                    lesson7: {subject: "", from: "", to: ""},
                },
                {
                    day: "Monday",
                    lesson1: {subject: "Math", from: "10:00", to: "11:00"},
                    lesson2: {subject: "", from: "", to: ""},
                    lesson3: {subject: "", from: "", to: ""},
                    lesson4: {subject: "", from: "", to: ""},
                    lesson5: {subject: "", from: "", to: ""},
                    lesson6: {subject: "", from: "", to: ""},
                    lesson7: {subject: "", from: "", to: ""},
                },
                {
                    day: "Thursday",
                    lesson1: {subject: "Math", from: "10:00", to: "11:00"},
                    lesson2: {subject: "", from: "", to: ""},
                    lesson3: {subject: "", from: "", to: ""},
                    lesson4: {subject: "", from: "", to: ""},
                    lesson5: {subject: "", from: "", to: ""},
                    lesson6: {subject: "", from: "", to: ""},
                    lesson7: {subject: "", from: "", to: ""},
                },
                {
                    day: "Wednesday",
                    lesson1: {subject: "Math", from: "10:00", to: "11:00"},
                    lesson2: {subject: "", from: "", to: ""},
                    lesson3: {subject: "", from: "", to: ""},
                    lesson4: {subject: "", from: "", to: ""},
                    lesson5: {subject: "", from: "", to: ""},
                    lesson6: {subject: "", from: "", to: ""},
                    lesson7: {subject: "", from: "", to: ""},
                },
                {
                    day: "Thursday",
                    lesson1: {subject: "Math", from: "10:00", to: "11:00"},
                    lesson2: {subject: "", from: "", to: ""},
                    lesson3: {subject: "", from: "", to: ""},
                    lesson4: {subject: "", from: "", to: ""},
                    lesson5: {subject: "", from: "", to: ""},
                    lesson6: {subject: "", from: "", to: ""},
                    lesson7: {subject: "", from: "", to: ""},
                }
            ]
        }
    }

    addEvent = (props) => {

    };

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        this.props.getClass(params.id);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };


    render() {
        const columns = [
            {
                Header: "Day/lesson",
                Cell: props => {
                    return (
                        <span>{props.original.day}</span>
                    )
                },
                style: {
                    textAlign: "center"
                },
            },
            {
                Header: "1",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson1 = props.original.lesson1;
                    if (lesson1) {
                        from = lesson1.from;
                        to = lesson1.to;
                        subject = lesson1.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>

                    )
                }, style: {
                    textAlign: "center"
                },
            },
            {
                Header: "2",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson1 = props.original.lesson2;
                    if (lesson1) {
                        from = lesson1.from;
                        to = lesson1.to;
                        subject = lesson1.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>

                    )
                }, style: {
                    textAlign: "center"
                },
            },
            {
                Header: "3",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson1 = props.original.lesson3;
                    if (lesson1) {
                        from = lesson1.from;
                        to = lesson1.to;
                        subject = lesson1.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>

                    )
                }, style: {
                    textAlign: "center"
                },
            },
            {
                Header: "4",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson1 = props.original.lesson4;
                    if (lesson1) {
                        from = lesson1.from;
                        to = lesson1.to;
                        subject = lesson1.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>

                    )
                }, style: {
                    textAlign: "center"
                },
            },
            {
                Header: "5",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson = props.original.lesson5;
                    if (lesson) {
                        from = lesson.from;
                        to = lesson.to;
                        subject = lesson.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>
                    )
                },
                style: {
                    textAlign: "center"
                },
            },
            {
                Header: "6",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson1 = props.original.lesson6;
                    if (lesson1) {
                        from = lesson1.from;
                        to = lesson1.to;
                        subject = lesson1.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>

                    )
                }, style: {
                    textAlign: "center"
                },
            },
            {
                Header: "7",
                Cell: props => {
                    let from, to, subject = "";
                    let lesson1 = props.original.lesson7;
                    if (lesson1) {
                        from = lesson1.from;
                        to = lesson1.to;
                        subject = lesson1.subject;
                    }
                    return (
                        <div onClick={this.addEvent(props.original)}>
                            <span className="font-weight-bold">{subject}</span>
                            <br/>
                            <span>{from} - {to}</span>
                        </div>

                    )
                }, style: {
                    textAlign: "center"
                },
            }
        ];

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <h2 className="text-center">Table Info</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/table" className="btn btn-light mb-3 float-left">
                                <i className="fa fa-arrow-circle-left"> Back To Tables</i>
                            </Link>
                        </div>
                        <div className="col-md-6"/>
                    </div>

                    <div className="panel-body my-4">
                        <div className="form-row align-items-center">
                            <h5 className="mr-sm-2">Class : {this.props.class.grade} {this.props.class.section}</h5>
                        </div>
                    </div>

                    <ReactTable id="posts-table"
                                columns={columns}
                                showPagination={false}
                                defaultPageSize={5}
                                data={this.state.table}
                                noDataText="No data available in table"
                                filterAll/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        class: state.class.class
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getClass: (id) => dispatch(classActions.getClass(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTable);
