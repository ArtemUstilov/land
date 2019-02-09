import React, {Component} from 'react';
import '../styles/MobileBtn.css'
import Button from './Button.js'
import classNames from 'classnames'
import logo from '../img/logoWhite.png'
import {Link} from 'react-router-dom'
import {LanguageToggle} from './LanguageToggle'

class MButton extends Component {
    constructor() {
        super();
        this.state = {
            openNav: true,
        }
        this.updateBtnState = this.updateBtnState.bind(this)
    }

    updateBtnState() {
        this.setState({openNav: !this.state.openNav})
        this.props.btnClicked(this.state.openNav);
    }

    render() {
        let classes = classNames({
            'visible': true,
            'no-border': true
        })
        return (
            <div className='header-m'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-center'>
                        <button id='toggle-hamburger' className="toggle-hamburger toggle-hamburger__animx">
                            <span>menu toggle</span>
                        </button>                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <Link to='/'>
                            <img alt='' src={logo} className='img-fluid'/>
                        </Link>
                    </div>
                    <div className='col-4 d-flex align-items-center justify-content-end pr-5'>
                        <LanguageToggle/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MButton;
