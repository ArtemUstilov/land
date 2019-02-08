import React, { Component } from 'react';
import '../styles/Button.css'
import classNames from 'classnames'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/navbar.json'
import mainTansl from '../translations/main.json'

class Button extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
        this.props.addTranslation(mainTansl);
    }
    render() {
        let classes = classNames({
            'white': this.props.white,
            'black': this.props.black || (!this.props.green&&!this.props.white),
            'green': this.props.green,
            'button':true,
            [this.props.classes]: true,
        })
        let cb = ()=>this.props.onclick && this.props.onclick()
        return (
            <button className={classes} onClick={cb} >
                <Translate id={this.props.value}/>
            </button>
        );
    }
}
export default withLocalize(Button);
