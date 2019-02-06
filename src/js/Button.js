import React, { Component } from 'react';
import '../styles/Button.css'
import classNames from 'classnames'
class Button extends Component {
    render() {
        let classes = classNames({
            'white': this.props.white,
            'black': !this.props.white,
            'button':true,
            [this.props.classes]: true,
        })
        return (
            <button className={classes}>
                {this.props.value}
            </button>
        );
    }
}
export default Button;
