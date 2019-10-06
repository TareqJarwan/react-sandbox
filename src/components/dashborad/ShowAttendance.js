import React, {Component} from 'react';
import SelectListGroup from "../common/SelectListGroup";
import ReactTable from "react-table";
import TextFieldGroup from "../common/TextFieldGroup";

class ShowAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            admin: true,
            class: '0',
            date: new Date()
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
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

    renderEditable = (cellInfo) => {
        return (
            <div
                style={{backgroundColor: "#fafafa"}}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({data});
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    };

    render() {

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

        const columns = [
            {
                Header: "ID",
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
                Header: "Student Name",
                accessor: "name",
                filterable: true
            },
            {
                Header: "Attendance",
                Cell: props => {
                    return (
                        <div className="btn-group">
                            <div className="form-check">
                                <label> <input type="radio" name={"radio" + props.original.id} checked/> Present
                                </label>
                            </div>
                            <div className="form-check">
                                <label> <input type="radio" name={"radio" + props.original.id}/> Absent </label>
                            </div>
                            <div className="form-check">
                                <label> <input type="radio" name={"radio" + props.original.id}/> Late </label>
                            </div>
                        </div>
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
                        <div>
                            <input type="text" className="form-control"/>
                        </div>
                    )
                },
                sortable: false,
                style: {
                    textAlign: "center"
                },
            }
        ];

        let today = this.state.date,
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <form className="form-inline">
                        <div className="form-row align-items-center">
                            <div className="form-group ml-2">
                                <label htmlFor="class_id" className="mr-2">Select Date :</label>
                                <TextFieldGroup type="date"
                                                onChange={this.onChange}
                                                value={this.state.date}
                                                name="date"/>
                            </div>
                            <div className="form-group ml-2">
                                <label htmlFor="class_id" className="mr-2">Select Class :</label>
                                <SelectListGroup onChange={this.onChange}
                                                 value={this.state.class}
                                                 name="class"
                                                 options={classes}/>
                            </div>
                            <button type="submit" className="btn btn-info">Take / View Attendance</button>
                        </div>
                    </form>
                </div>

                <div className="panel-body my-4">
                    <div className="form-row align-items-center">
                        <h5 className="mr-sm-2">Class : {classes[1].label} ,Date : {date}</h5>
                    </div>
                </div>

                <ReactTable id="posts-table"
                            columns={columns}
                            defaultPageSize={5}
                            data={this.state.posts}
                            noDataText="No data available in table"
                            filterAll/>
            </div>
        );
    }
}

export default ShowAttendance;
