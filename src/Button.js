import React, { Component } from 'react';
import './Button.css'
import classNames from 'classnames'
class Button extends Component {
    constructor(){
        super();
        this.state = {
            isVisible: window.innerWidth < 500,
            openNav: false,
        }
        this.updateBtn = this.updateBtn.bind(this);
    }
    updateBtn(){
        this.setState({isVisible: window.innerWidth < 500})
        if (!this.state.isVisible)
            this.props.btnClicked(false);
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateBtn)
    }
    updateBtnState(){
        this.state.openNav = !this.state.openNav;
        this.props.btnClicked(this.state.openNav);
    }
    render() {
        let classes = classNames({
            'invisible': !this.state.isVisible,
            'visible': this.state.isVisible,
            'btn':true,
        })
        return (
            <button onClick={()=>this.updateBtnState()} className={classes}>
                Click
            </button>
        );
    }
}

export default Button;
