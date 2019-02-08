import React, { Component } from 'react';
import '../styles/Button.css'
import classNames from 'classnames'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/navbar.json'

class Button extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
    }
    render() {
        let classes = classNames({
            'white': this.props.white,
            'black': !this.props.white,
            'button':true,
            [this.props.classes]: true,
        })
        return (
            <button className={classes} >
                <Translate id={this.props.value}/>
            </button>
        );
    }
}
export default withLocalize(Button);
