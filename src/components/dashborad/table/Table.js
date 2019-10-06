import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import ShowClassesTable from "./ShowClassesTable";

class Table extends Component {
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
                            <i className="fa fa-list"/> Student Table
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    activeTab={this.state.activeTab}>
                    <TabPane
                        tabId="1">
                        <Row>
                            <Col sm="12">
                                <ShowClassesTable/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Table;
