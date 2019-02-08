import React, {Component} from 'react';
import '../styles/MobileBtn.css'
import Button from './Button.js'
import classNames from 'classnames'
import logo from '../img/logoWhite.png'
import {Link} from 'react-router-dom'
import {MLanguageToggle} from './LanguageToggle'

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
                    <div className='col-6 d-flex justify-content-center'>
                        <Button onclick={this.updateBtnState} white={false} classes={classes} value='nav.mob_n'/>
                    </div>
                    <div className='col-3'>
                        {/*<p className='lang'>Укр</p>*/}
                        <MLanguageToggle/>
                        {/*<p className='lang'>Рус</p>*/}
                    </div>
                    <div className='col-3'>
                        <Link to='/'>
                            <img alt='' src={logo} className='img-fluid'/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MButton;
