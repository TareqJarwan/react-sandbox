import React, {Component} from 'react';
import {connect} from "react-redux";
import queryString from "query-string";
import {Link} from "react-router-dom";
import RcViewer from 'rc-viewer'

import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import image4 from '../../assets/img/image4.jpg';
import image5 from '../../assets/img/image5.jpg';
import image6 from '../../assets/img/image6.jpg';
import image7 from '../../assets/img/image7.jpg';
import image8 from '../../assets/img/image8.jpg';
import image9 from '../../assets/img/image9.jpg';

import * as eventActions from "../../store/actions/eventActions";

class ShowEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true,

            // I should delete those when I have the right information from the server
            imagesUrls: [
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                image8,
                image9
            ],

            videosUrls: [
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
            ]
        };
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        this.props.getEvent(params.id);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.event) {
            this.setState({event: nextProps.event});
        }
    }

    render() {
        const viewerOptions = {scalable: false, zoomable: false, title: false, toolbar: 10};
        const {event} = this.props;
        const level = event.level;

        console.log(event);
        let target, image, video = null;


        if (level === "student") {
            const targets = event.students.map(student => {
                return student;
            });

            target = (
                <div className="form-group row">
                    <label htmlFor="example-text-input"
                           className="col-2 col-form-label">Target</label>
                    <div className="col-10">
                        <label htmlFor="example-text-input"
                               className="col-form-label font-weight-bold">{targets}</label>
                    </div>
                </div>
            )
        } else if (level === "class") {
            const targets = event.classes.map(item => {
                return item;
            });

            target = (
                <div className="form-group row">
                    <label htmlFor="example-text-input"
                           className="col-2 col-form-label">Target</label>
                    <div className="col-10">
                        <label htmlFor="example-text-input"
                               className="col-form-label font-weight-bold">{targets}</label>
                    </div>
                </div>
            )
        }

        if (true/*event.images*/) {
            const images = /*event.images*/this.state.imagesUrls.map((url, index) => {
                return <div className="col-sm-4 p-3" key={index}>
                    <img className="img-fluid image" src={url} alt={this.state.description}/>
                </div>
            });

            image = (
                <div className="form-group row">
                    <label htmlFor="example-text-input"
                           className="col-2 col-form-label">Images</label>
                    <div className="col-10">
                        <RcViewer options={viewerOptions} ref='viewer'>
                            <div className="row">
                                {images}
                            </div>
                        </RcViewer>
                    </div>
                </div>
            )
        }

        if (true/*event.videos*/) {
            const iframes = /*event.videos*/this.state.videosUrls.map((url, index) => {
                return <div className="col-sm-6 mb-5" key={index}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe allowFullScreen className="embed-responsive-item" title={url} src={url}/>
                    </div>
                </div>
            });

            video = (
                <div className="form-group row">
                    <label htmlFor="example-text-input"
                           className="col-2 col-form-label">Videos</label>
                    <div className="col-10">
                        <RcViewer options={viewerOptions} ref='viewer'>
                            <div className="row">
                                {iframes}
                            </div>
                        </RcViewer>
                    </div>
                </div>
            )
        }

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <h2 className="text-center">Event Info</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/event" className="btn btn-light mb-3 float-left">
                                <i className="fa fa-arrow-circle-left"> Back To Events</i>
                            </Link>
                        </div>
                        <div className="col-md-6"/>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-2 col-form-label">Title</label>
                                <div className="col-10">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{event.title}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-2 col-form-label">Description</label>
                                <div className="col-10">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{event.text}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-2 col-form-label">Date</label>
                                <div className="col-10">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{event.date}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-2 col-form-label">Issued By</label>
                                <div className="col-10">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{event.issuedBy.currentUserName}</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="example-text-input"
                                       className="col-2 col-form-label">Level</label>
                                <div className="col-10">
                                    <label htmlFor="example-text-input"
                                           className="col-form-label font-weight-bold">{event.level}</label>
                                </div>
                            </div>
                            {target}
                            {image}
                            {video}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        event: state.event.event
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getEvent: (id) => dispatch(eventActions.getEvent(id)),
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);
