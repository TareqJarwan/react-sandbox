import React, {Component} from 'react';
import Modal from 'react-modal';
import TextFieldGroup from "../common/TextFieldGroup";
import {UploaderComponent} from "@syncfusion/ej2-react-inputs";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class ModalTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false, title: "",
            description: "",
            errors: {},
            paths: {
                removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
                saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
            }
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    toggleModal = event => {
        console.log(event);
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    render() {
        const {isOpen} = this.state;

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: '10%',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <div>
                <button className="btn btn-primary" onClick={this.toggleModal}>Open Modal</button>
                <Modal
                    id="modal_with_forms"
                    isOpen={isOpen}
                    closeTimeoutMS={150}
                    style={customStyles}
                    contentLabel="modalB"
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={this.toggleModal}>

                    <div className="jumbotron bg-light">
                        <div className="panel-body mb-3">
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
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
                                                <input type="submit" value="Add Event" className="btn btn-info mr-2"/>
                                                <input type="button" value="Cancel" onClick={this.toggleModal}
                                                       className="btn btn-danger"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}


export default ModalTest;
