import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";

import ShowEvents from "./ShowEvents";
import AddEvent from "./AddEvent";

class Event extends Component {
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
                            <i className="fa fa-plus-circle"/> Add New Event
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <ShowEvents/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <AddEvent/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Event;
