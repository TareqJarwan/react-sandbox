import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import AddStudent from "./AddStudent";
import ShowStudents from "./ShowStudents";
import ErrorBoundary from "../common/ErrorBoundary";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            error: null,
            errorInfo: null
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        const {error, errorInfo} = this.state;

        if (error) {
            return <ErrorBoundary error={error} errorInfo={errorInfo}/>
        }

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '1'})}
                                 onClick={() => this.toggle('1')}>
                            <i className="fa fa-list"/> Students List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({active: this.state.activeTab === '2'})}
                                 onClick={() => this.toggle('2')}>
                            <i className="fa fa-plus-circle"/> Add New Student
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    activeTab={this.state.activeTab}>
                    <TabPane
                        tabId="1">
                        <Row>
                            <Col sm="12">
                                <ShowStudents/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <AddStudent/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Student;
