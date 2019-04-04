// https://www.npmjs.com/package/react-table

import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import SelectListGroup from "../common/SelectListGroup";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            admin: false,
            class: '0'
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(posts => {
                this.setState({posts: posts})
            })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    deleteRow = (id) => {
        const index = this.state.posts.findIndex(post => {
            return post.id === id;
        });
        window.confirm('Are you sure?');
        console.log(index);
    };

    render() {
        const columns = [
            {
                Header: "ID",
                Footer: "ID",
                accessor: "id",
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
                filterable: true
            },
            {
                Header: "Title",
                Footer: "Title",
                accessor: "title",
                Cell: props => {
                    return (
                        <a href={"/student/show?id=" + props.original.id}>{props.original.title}</a>
                    )
                },
                filterable: true
            },
            {
                Header: "Content",
                Footer: "Content",
                accessor: "body",
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

                <ReactTable id="posts-table"
                            lassName="m-5"
                            columns={columns}
                            defaultPageSize={5}
                            data={this.state.posts}
                            noDataText="No data available in table"
                            filterAll/>
            </div>
        );
    }
}

export default Table;