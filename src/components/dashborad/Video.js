import React, {Component} from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
                "//www.youtube.com/embed/KpllAjxOIUU",
            ]
        }
    }

    render() {
        const iframes = this.state.urls.map((url) => {
            return <div className="col-sm-4 mb-5">
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