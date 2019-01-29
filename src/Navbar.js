import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <div>
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
