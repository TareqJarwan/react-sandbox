import React, {Component} from 'react';
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";

import TextFieldGroup from "../../common/TextFieldGroup";
import * as actions from "../../../store/actions/classAction";
import Button from "../../common/Button";
import DatePickerInputField from "../../common/DatePickerInputField";
import PhoneInputField from "../../common/PhoneInputField";

class AddClass extends Component {
    constructor() {
        super();
        this.state = {
            grade: "",
            section: "",
            birthDate: null,
            phoneNumber: "",
            errors: {},
            tags: [],
            suggestions: [
                {id: 'Jordan', text: 'Jordan'},
                {id: 'USA', text: 'USA'},
                {id: 'Thailand', text: 'Thailand'},
                {id: 'India', text: 'India'}
            ]
        };
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onDateChange = (date) => {
        this.setState({birthDate: date})
    };

    onPhoneChange = (phone) => {
        this.setState({phoneNumber: phone})
    };

    handleDeleteTag = (i) => {
        const {tags} = this.state;
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        });
    };

    handleAddTag = (tag) => {
        let {tags} = this.state;
        tags = [...tags, tag];
        this.setState(state => ({tags: tags}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        const classData = {
            grade: this.state.grade,
            section: this.state.section,
            date: new Date(this.state.birthDate).getTime(),
            phoneNumber: this.state.phoneNumber
        };
        console.log(classData);
        //this.props.createClass(classData);
    };

    render() {
        const {errors} = this.state;
        const {direction, lang} = this.props;

        const style = {
            textAlign: 'right'
        };

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           style={direction === 'rtl' ? style : null}
                                           className="col-3 col-form-label">
                                        <FormattedMessage id="class.grade" defaultMessage="Grade"/>
                                    </label>
                                    <div className="col-9">
                                        <TextFieldGroup type="text"
                                                        id="class.gradeLabel"
                                                        defaultMessage="* Grade"
                                                        direction={this.props.direction}
                                                        name="grade"
                                                        value={this.state.grade}
                                                        onChange={this.onChange}
                                                        error={errors.grade}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-search-input"
                                           style={direction === 'rtl' ? style : null}
                                           className="col-3 col-form-label">
                                        <FormattedMessage id="class.section" defaultMessage="Section"/>
                                    </label>
                                    <div className="col-9">
                                        <TextFieldGroup type="text"
                                                        id="class.sectionLabel"
                                                        defaultMessage="* Section"
                                                        direction={this.props.direction}
                                                        name="section"
                                                        value={this.state.section}
                                                        onChange={this.onChange}
                                                        error={errors.section}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           style={direction === 'rtl' ? style : null}
                                           className="col-3 col-form-label">
                                        <FormattedMessage id="class.birthDate" defaultMessage="Birth Date"/>
                                    </label>
                                    <div className="col-9">
                                        <DatePickerInputField handleChange={this.onDateChange}
                                                              startDate={this.state.birthDate}
                                                              lang={lang}
                                                              placeholder="Click to select your birth Date"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           style={direction === 'rtl' ? style : null}
                                           className="col-3 col-form-label">
                                        <FormattedMessage id="class.phoneNumber" defaultMessage="Phone Number"/>
                                    </label>
                                    <div className="col-9">
                                        <PhoneInputField handleChange={this.onPhoneChange}
                                                         phone={this.state.phoneNumber}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input"
                                           style={direction === 'rtl' ? style : null}
                                           className="col-3 col-form-label">
                                        <FormattedMessage id="class.phoneNumber" defaultMessage="Phone Number"/>
                                    </label>
                                    <div className="col-9">
                                        {/*<TagsInputField
                                            tags={this.state.tags}
                                            handleAddition={this.handleAddTag}
                                            handleDelete={this.handleDeleteTag}
                                            suggestions={this.state.suggestions}/>*/}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-color-input" className="col-3 col-form-label"/>
                                    <div className="col-9">
                                        <Button type="submit"
                                                id="class.submit"
                                                defaultMessage="Add Class"
                                                direction={this.state.direction}
                                                classes="btn btn-info"/>
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


const mapStateToProps = state => {
    return {
        direction: state.locale.direction,
        lang: state.locale.lang,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createClass: (classData) => dispatch(actions.addClass(classData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClass);
