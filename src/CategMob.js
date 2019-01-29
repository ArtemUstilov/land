import React, { Component } from 'react';
import './CategMob.css'
import classNames from 'classnames'

class CategMob extends Component {
    render() {
        let classes = classNames({
            'box': true,
        })
        return (
            <div className={classes}>
            </div>
        );
    }
}

export default CategMob;
