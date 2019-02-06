import React, { Component } from 'react';

import './Navbar.css';
import Button from './Button.js'
import CategMob from './CategMob.js'

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            btnClicked: false,
        }
    }
    updateBtnState(value){
        this.setState({btnClicked: value})
    }
    render() {
        return (
            <div className="nav">
                <div >
                    <Button btnClicked = {this.updateBtnState.bind(this)} />
                    {this.state.btnClicked && <CategMob/>}
                    <a href="#about">О компании</a><a
                    href="#doc">Документы</a><a
                    href="#feedback">Отзывы</a><a href="#contacts">Контакты</a>
                </div>
                <button className="back-call" >Заказать звонок</button>
            </div>

        );
    }
}

export default Navbar;
