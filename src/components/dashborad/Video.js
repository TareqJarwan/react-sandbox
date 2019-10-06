/*
import React, {Component} from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [
                /*"//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",*/
            ]
        }
    }

    render() {
        const iframes = this.state.urls.map((url) => {
            return <div className="col-sm-4 mb-5" key={url}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" title={url} src={url}/>
                </div>
            </div>
        });

        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <div className="row">
                        {iframes}
                    </div>

                </div>
            </div>
        );
    }
}

export default Video;
*/

import React, {Component} from 'react';
import FileUploader from "../common/FileUploader";

let config = {
    API_KEY: "AIzaSyB_3zIpSArggwwgfWkOxc9yh9f4BQ3lWUY",
    CLIENT_ID: "1034925747541-po2gk9n45oi19mv23kidjts57u6446a0.apps.googleusercontent.com",
    SCOPES: "https://www.googleapis.com/auth/youtube " +
        "https://www.googleapis.com/auth/youtube.force-ssl " +
        "https://www.googleapis.com/auth/youtube.readonly " +
        "https://www.googleapis.com/auth/youtube.upload",
    DISCOVERY_URL: [
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
    ]
};

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gapiReady: false,
            authorized: false
        }
    }

    loadYoutubeApi() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        let self = this;

        script.onload = () => {
            window.gapi.load('client', () => {
                window.gapi.client.init({
                    apiKey: config.API_KEY,
                    discoveryDocs: config.DISCOVERY_URL,
                    clientId: config.CLIENT_ID,
                    scope: config.SCOPES
                }).then(() => {
                    this.setState({gapiReady: true});
                    window.gapi.auth2.getAuthInstance().isSignedIn.listen(self.updateSigninStatus);
                    self.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                    window.gapi.auth2.getAuthInstance().signIn();
                    this.setState({authorized: true});
                })
            });
        };

        document.body.appendChild(script);
    }

    login = () => {
        this.loadYoutubeApi();
    };


    updateSigninStatus = (isSignedIn) => {
        console.log("asddasdaSD " + isSignedIn);
        if (isSignedIn) {
            //authorizeButton.style.display = "none";
            //signoutButton.style.display = "block";
            this.getChannel();
        } else {
            //authorizeButton.style.display = "block";
            //signoutButton.style.display = "none";
        }
    };

    getChannel = () => {
        window.gapi.client.youtube.channels
            .list({
                part: "snippet,contentDetails,statistics",
                forUsername: "GoogleDevelopers"
            })
            .then(function (response) {
                const channel = response.result.items[0];
                console.log(channel);
            });
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    onImageChange = (e, type) => {

    };

    render() {
        return (
            <div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    {this.state.gapiReady ? <h4>GAPI is loaded and ready to use.</h4> : <h4>GAPI is not loaded yet</h4>}
                    {!this.state.authorized ?
                        <h4>
                            You are not authorized to use the youtube please <button className="btn btn-info"
                                                                                     onClick={this.login}>Login</button> to use it.
                        </h4> :
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group row">
                                <label htmlFor="showPersonalInfo"
                                       className="col-3 col-form-label">Upload Video
                                </label>
                                <div className="col-9">
                                    <FileUploader name="profilePicture"
                                                  id="profilePicture"
                                                  type="file"
                                                  accept="video/*"
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
                        </form>
                    }
                </div>
            </div>
        );
    }
}

export default Video;
