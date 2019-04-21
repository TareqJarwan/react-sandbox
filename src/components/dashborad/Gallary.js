import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import ShowGallary from "./ShowGallary";
import Video from "./Video";
import AddMultimedia from "./AddMultimedia";

class Gallary extends Component {
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
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '1'})}
                                 onClick={() => this.toggle('1')}>
                            <i className="fa fa-list"/> Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '2'})}
                                 onClick={() => this.toggle('2')}>
                            <i className="fa fa-list"/> Video
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '3'})}
                                 onClick={() => this.toggle('3')}>
                            <i className="fa fa-plus-circle"/> Add New Multimedia
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <ShowGallary/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Video/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <AddMultimedia/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Gallary;