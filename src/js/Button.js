import React, { Component } from 'react';
import '../styles/Button.css'
import '../styles/MobileBtn.css'
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
        let clas = this.props.classes.split(' ');
        let obg = clas.reduce((ob,x)=>{ob[x] =  true; return ob;},{})
        let classes ={
            'white': this.props.white,
            'black': this.props.black || (!this.props.green&&!this.props.white),
            'green': this.props.green,
            'button':true,
        }
        Object.assign(classes, obg);
        classes = classNames(classes)
        let cb = ()=>this.props.onclick && this.props.onclick()
        return (
            <button id = {this.props.id} className={classes} onClick={cb} >
                <Translate id={this.props.value}/>
            </button>
        );
    }
}
export default withLocalize(Button);
