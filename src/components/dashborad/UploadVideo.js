/*
import React from 'react';
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import FileUploader from "../common/FileUploader";

const UploadVideo = ({classes, students, errors}) => {
    const levelOptions = [
        {label: '* Select Your Event Level ', value: 0},
        {label: 'School', value: 'school'},
        {label: 'Class', value: 'class'},
        {label: 'Student', value: 'student'},
    ];

    let classElement = null;
    let studentElement = null;
    let level = this.state.level;
    if (level === "class") {
        classElement = <div className="form-group row">
            <label htmlFor="example-text-input"
                   className="col-3 col-form-label"> Class
            </label>
            <div className="col-9">
                <SelectListGroup placeholder="Class"
                                 name="class"
                                 value={this.state.class}
                                 onChange={this.onChange}
                                 error={errors.class}
                                 options={this.state.classesObj}/>
            </div>
        </div>
    } else if (level === "student") {
        studentElement = <div className="form-group row">
            <label htmlFor="example-text-input"
                   className="col-3 col-form-label"> Student
            </label>
            <div className="col-9">
                <SelectListGroup placeholder="Student"
                                 name="student"
                                 value={this.state.student}
                                 onChange={this.onChange}
                                 error={errors.student}
                                 options={this.state.studentsObj}/>
            </div>
        </div>
    }


    return (
        <div className="jumbotron bg-light">
            <div className="panel-body mb-3">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-3 col-form-label"> Level
                                </label>
                                <div className="col-9">
                                    <SelectListGroup placeholder="Level"
                                                     name="level"
                                                     value={this.state.level}
                                                     onChange={this.onChange}
                                                     error={errors.level}
                                                     options={levelOptions}/>
                                </div>
                            </div>
                            {classElement}
                            {studentElement}
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-3 col-form-label"> Title
                                </label>
                                <div className="col-9">
                                    <TextFieldGroup type="text"
                                                    id="event.title"
                                                    defaultMessage="* Title"
                                                    direction={this.props.direction}
                                                    name="title"
                                                    value={this.state.title}
                                                    onChange={this.onChange}
                                                    error={errors.title}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-search-input"
                                       className="col-3 col-form-label">Date
                                </label>
                                <div className="col-9">
                                    <TextFieldGroup type="date"
                                                    id="event.title"
                                                    defaultMessage="* Date"
                                                    direction={this.props.direction}
                                                    name="date"
                                                    value={this.state.date}
                                                    onChange={this.onChange}
                                                    error={errors.date}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-search-input"
                                       className="col-3 col-form-label">Description
                                </label>
                                <div className="col-9">
                                    <TextAreaFieldGroup
                                        name="text"
                                        placeholder="* Description"
                                        value={this.state.text}
                                        onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="showPersonalInfo"
                                       className="col-3 col-form-label">Upload images
                                </label>
                                <div className="col-9">
                                    <FileUploader name="profilePicture"
                                                  id="profilePicture"
                                                  type="file"
                                                  accept="image/!*"
                                                  placeholder="Choose Image(s)..."
                                                  onChange={(event) => this.handleChange(event, 'images')}
                                                  multiple={true}/>
                                    {images}

                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="showPersonalInfo"
                                       className="col-3 col-form-label">Upload Video
                                </label>
                                <div className="col-9">
                                    <FileUploader name="profilePicture"
                                                  id="profilePicture"
                                                  type="file"
                                                  accept="video/!*"
                                                  placeholder="Choose Video(s)..."
                                                  onChange={(event) => this.onImageChange(event, 'videos')}
                                                  multiple={true}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-color-input" className="col-3 col-form-label"/>
                                <div className="col-9">
                                    <input type="submit" value="Add Event" className="btn btn-info"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadVideo;
*/
