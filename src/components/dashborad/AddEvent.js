import React, {Component} from 'react';
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import {UploaderComponent} from "@syncfusion/ej2-react-inputs";

import "../../App.css"

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            errors: {},
            paths:{
                removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
                saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
            }
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const eventData = {
            title: "",
            description: "",
            createdAt:new Date(),
        };
        console.log(eventData);
    };

    render() {
        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           className="col-2 col-form-label">Event Title</label>
                                    <div className="col-10">
                                        <TextFieldGroup id="example-text-input"
                                                        type="text"
                                                        placeholder="* Title"
                                                        name="title"
                                                        value={this.state.title}
                                                        onChange={this.onChange}/>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           className="col-2 col-form-label">Event Description</label>
                                    <div className="col-10">
                                        <TextAreaFieldGroup id="example-text-input"
                                                            type="text"
                                                            placeholder="* Description"
                                                            name="description"
                                                            value={this.state.description}
                                                            onChange={this.onChange}/>

                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="example-color-input" className="col-2 col-form-label"/>
                                    <div className="col-10">
                                        <UploaderComponent autoUpload={false}
                                                           sequentialUpload={true}
                                                           asyncSettings={this.state.paths}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="example-color-input" className="col-2 col-form-label"/>
                                    <div className="col-10">
                                        <input type="submit" value="Add Event" className="btn btn-info "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddEvent;