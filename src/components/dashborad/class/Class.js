import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import {FormattedMessage} from "react-intl";

import AddClass from "./AddClass";
import ShowClasses from "./ShowClasses";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: true,
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
                            <i className="fa fa-list"/> <FormattedMessage id="class.classesList"
                                                                          defaultMessage="Classes List"/>
                        </NavLink>
                    </NavItem>
                    {this.state.admin ?
                        <NavItem>
                            <NavLink className={classnames({active: this.state.activeTab === '2'})}
                                     onClick={() => this.toggle('2')}>
                                <i className="fa fa-plus-circle"/> <FormattedMessage id="class.addNewClass"
                                                                                     defaultMessage="Add New Class"/>
                            </NavLink>
                        </NavItem>
                        : null}
                </Nav>
                <TabContent
                    activeTab={this.state.activeTab}>
                    <TabPane
                        tabId="1">
                        <Row>
                            <Col sm="12">
                                <ShowClasses/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <AddClass/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Class;
