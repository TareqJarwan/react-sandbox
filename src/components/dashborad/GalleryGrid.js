import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import Gallery from 'react-grid-gallery';

class GalleryGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    render() {
        let IMAGES = [
            {
                src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
                thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
                thumbnailWidth: 240,
                thumbnailHeight: 320,
                caption: "8H (gratisography.com)",
                thumbnailCaption: "8H"
            },
            {
                src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
                thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 190,
                caption: "286H (gratisography.com)",
                thumbnailCaption: "286H"
            },
            {
                src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
                thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 148,
                caption: "315H (gratisography.com)",
                thumbnailCaption: "315H"
            },
            {
                src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
                thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 213,
                caption: "201H (gratisography.com)",
                thumbnailCaption: "201H"
            },
            {
                src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
                thumbnailWidth: 248,
                thumbnailHeight: 320,
                caption: "Big Ben (Tom Eversley - isorepublic.com)",
                thumbnailCaption: "Big Ben"
            },
            {
                src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
                thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 113,
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
                thumbnailCaption: (<span style={{ color: "darkred" }}>Red Zone - <i>Paris</i></span>)
            },
            {
                src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
                thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
                thumbnailWidth: 313,
                thumbnailHeight: 320,
                caption: "Wood Glass (Tom Eversley - isorepublic.com)",
                thumbnailCaption: "Wood Glass"
            },
            {
                src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
                thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 213,
                caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
                thumbnailCaption: "Flower Interior Macro"
            }
        ];

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => this.toggle('1')}>
                            <i className="fa fa-list" /> Images
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => this.toggle('2')}>
                            <i className="fa fa-list" /> Videos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => this.toggle('3')}>
                            <i className="fa fa-plus-circle" /> Add New Image/Video
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div className="jumbotron bg-light">
                                    <div className="panel-body mb-3">
                                        <Gallery images={IMAGES} enableImageSelection={false} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div className="jumbotron bg-light">
                                    <div className="panel-body mb-3">
                                        <Gallery images={IMAGES} enableImageSelection={false} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default GalleryGrid;