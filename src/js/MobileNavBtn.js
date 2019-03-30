import React, {Component} from 'react';
import '../styles/MobileBtn.css'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import {LanguageToggle} from './LanguageToggle'
import Button from './Button.js'
import logo from '../img/logoWhite.png'
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
        return (
            <div className='header-m' id='nav-menu'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-center'>
                        <button id='toggle-hamburger' className="toggle-hamburger toggle-hamburger__animx">
                            <span>menu toggle</span>
                        </button>                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <Link to='/' className = 'd-flex flex-column justify-content-center'>
                            <img alt='' src={logo}
                                 className='img-fluid nav-text' style={{minWidth: '150px'}}/>
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
