import React, {Component} from 'react';

import classes from './Modal.css';
import Backdrop from "./Backdrop";

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const {show} = this.props;
        console.log("show " + show)
        return (
            <div>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}/>
                <div className={classes.Modal} style={{
                    transform: this.props.show ? 'transformY(0)' : 'transformY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    visibility: this.props.show ? 'visible' : 'hidden'
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;