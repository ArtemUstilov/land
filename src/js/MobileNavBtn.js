import React, {Component} from 'react';
import '../styles/MobileBtn.css'
import classNames from 'classnames'
import logo from '../img/logoWhite.png'
import {Link} from 'react-router-dom'
import {LanguageToggle} from './LanguageToggle'
import Button from './Button.js'
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
                            <Button white={this.state.scroll} classes='nav-text no-border' value={'nav.logo'}/>
                            <Button white={this.state.scroll} classes='nav-text no-border' value={'nav.l_above'}/>
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
