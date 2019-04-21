import React, {Component} from 'react';

import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import image4 from '../../assets/img/image4.jpg';
import image5 from '../../assets/img/image5.jpg';
import image6 from '../../assets/img/image6.jpg';
import image7 from '../../assets/img/image7.jpg';
import image8 from '../../assets/img/image8.jpg';
import image9 from '../../assets/img/image9.jpg';

class ShowGallary extends Component {
    render() {
        return (<div className="jumbotron bg-light">
                <div className="panel-body mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image1}>
                                <img className="img-fluid image" src={image1}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image2}>
                                <img className="img-fluid image" src={image2}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image3}>
                                <img className="img-fluid image" src={image3}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image4}>
                                <img className="img-fluid image" src={image4}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image5}>
                                <img className="img-fluid image" src={image5}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image6}>
                                <img className="img-fluid image" src={image6}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image7}>
                                <img className="img-fluid image" src={image7}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image8}>
                                <img className="img-fluid image" src={image8}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 item zoom-on-hover">
                            <a className="lightbox" href={image9}>
                                <img className="img-fluid image" src={image9}/>
                                <span className="description">
                            <span className="description-heading">Lorem Ipsum</span>
                            <span
                                className="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowGallary;