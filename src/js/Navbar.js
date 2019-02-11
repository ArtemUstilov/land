import React, {Component} from 'react';
import '../styles/Navbar.css'
import '../styles/settings.css'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/navbar.json'
import Button from "./Button.js";
import logo from '../img/logoWhite.png'
import logoBlack from '../img/logo.png'
import {Link} from 'react-router-dom'
// import design2 from '../img/design2.jpg'
import MobileBtn from './MobileNavBtn.js'
import {LanguageToggle} from './LanguageToggle'
import {renderToStaticMarkup} from "react-dom/server";
import classNames from 'classnames'

class MNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.props.initialize({
            languages: [
                {name: "Русский", code: "ru"},
                {name: "Українська", code: "ua"}
            ],
            options: {renderToStaticMarkup}
        });
        this.props.addTranslation(contactsTranslations);
        this.click = this.click.bind(this);
    }

    click() {
        this.setState({open: !this.state.open});
    }
    openMenu(){
        let element = document.getElementById('sss');
        element.classList.remove('run-animation');
        void element.offsetHeight;
        element.classList.add('run-animation');
        element.classList.add('visible');
    }
    closeMenu(){
        let element = document.getElementById('sss');
        element.classList.remove('visible');
    }
    componentDidMount() {
        let toggle = document.getElementById("toggle-hamburger");
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            let element = document.getElementById('sss');
            if (!this.state.open) {
                this.openMenu();
            } else {
                this.closeMenu();
            }
            this.click();
            toggle.classList.toggle("is-active");
        });
        document.addEventListener('click', (e)=>{
            e.preventDefault();
            let nav = document.getElementById('nav-menu');
            if(e.target !== nav && e.target !== toggle &&  !nav.contains(e.target) && !toggle.contains(e.target)){
                this.closeMenu();
                this.click();
                toggle.classList.remove("is-active");
            }
        })
    }

    render() {
        return <div id='top-menu'>
            <ul>
                <li>
                    <ul id='sss'>
                        {[['nav.main', '/'],
                            ['nav.services', '/services'],
                            ['nav.portfolio', '/portfolio'],
                            ['nav.about', '/about'],
                            ['nav.contacts', '/contacts'],
                            ['nav.call', '/call']].map(x => {
                            return <li key={x[0]}>
                                <Link to={x[1]}>
                                    <Translate id={x[0]}/>
                                </Link>
                            </li>
                        })}
                    </ul>
                </li>
            </ul>
        </div>
        //
        //
        //
        //
        // <section className='m-navbar'>
        //         <div className='row  d-flex flex-column justify-content-center align-items-center'>
        //                             {[['nav.services', '/services'],
        //                                 ['nav.portfolio', '/portfolio'],
        //                                 ['nav.about', '/about'],
        //                                 ['nav.contacts', '/contacts'],
        //                                 ['nav.call', '/call']].map(x => {
        //                                 return <div key={x[0]}
        //                                             className="col-12 d-flex justify-content-center align-items-center">
        //                                     <Link to={x[1]}>
        //                                         <Button white={false} value={x[0]}/>
        //                                     </Link>
        //                                 </div>
        //                             })}
        //     </div>
        // </section>;
    }
}

MNavbar = withLocalize(MNavbar)

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: false,
            mobile: window.innerWidth < 576,
            scroll: false
        }
        this.props.initialize({
            languages: [
                {name: "Русский", code: "ru"},
                {name: "Українська", code: "ua"}
            ],
            options: {renderToStaticMarkup}
        });
        this.props.addTranslation(contactsTranslations);
        this.updateSizeState = this.updateSizeState.bind(this);
        this.updateBtnState = this.updateBtnState.bind(this);
        this.updateScroll = this.updateScroll.bind(this)
    }

    updateScroll() {
        this.setState({
            scroll: window.pageYOffset > 100
        })
        if (!this.state.scroll) {
            document.getElementById('toggle').classList.remove('white')
            document.getElementById('toggle').classList.add('black')

        } else {
            document.getElementById('toggle').classList.remove('black')
            document.getElementById('toggle').classList.add('white')
        }

    }

    updateBtnState(value) {
        this.setState({btnClicked: value})
    }

    btnFalse() {
        this.updateBtnState(false);
    }

    updateSizeState() {
        this.setState({mobile: window.innerWidth < 576})
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateSizeState)
        window.addEventListener('mouseup', this.btnFalse.bind(this))
        window.addEventListener('scroll', this.updateScroll);
    }

    render() {
        let classesBigNav = classNames({
            header: true,
            'header-opac': this.state.scroll,
            invisible: this.state.mobile,
        })
        let call_link = classNames({
            'nav-text': true,
            'call-link': !this.state.scroll,
            'call-link-blck': this.state.scroll,
        })
        return <section>
            <div className={classesBigNav}>
                <div className='row  d-flex justify-content-center align-items-center'>

                        <div className='col-sm-2 d-flex align-items-center justify-content-center'>
                            <LanguageToggle scroll={this.state.scroll}/>
                        </div>
                    <div className="col-12 col-xs-10 col-sm-8 d-flex ">
                        <div className='row d-flex justify-content-around w-100'>
                            <div className="col-sm-5 d-flex justify-content-end">
                                {/*<div className='row'>*/}
                                    {[['nav.services', '/services'],
                                        ['nav.portfolio', '/portfolio']].map(x => {
                                        return <div key={x[0]}
                                                    className="col-sm-4 d-flex justify-content-center align-items-center no-padding">
                                            <Link to={x[1]}>
                                                <Button white={this.state.scroll} classes='nav-text' value={x[0]}/>
                                            </Link>
                                        </div>
                                    })}
                                {/*</div>*/}
                            </div>
                            <div className="col-sm-2 d-flex justify-content-center align-items-center">
                                <Link to='/'>
                                    <Button white={this.state.scroll} classes='nav-text' value={'nav.logo'}/>
                                    <Button white={this.state.scroll} classes='nav-text' value={'nav.l_above'}/>
                                    {/*<img alt='' src={this.state.scroll ? logoBlack : logo}*/}
                                         {/*className='img-fluid nav-text' style={{minWidth: '150px'}}/>*/}
                                </Link>
                            </div>
                            <div className="col-sm-5 d-flex justify-content-start">
                                {/*<div className='row'>*/}
                                    {[['nav.about', '/about'],
                                        ['nav.contacts','/contacts']].map(x => {
                                        return <div key={x[0]}
                                                    className="col-sm-4 d-flex justify-content-center align-items-center no-padding">
                                            <Link to={x[1]}>
                                                <Button white={this.state.scroll} classes='nav-text' value={x[0]}/>
                                            </Link>
                                        </div>
                                    })}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                <div className='col-sm-2'>
                    <div className="col-12 d-flex justify-content-start align-items-center">
                        <Link to='/call'>
                            <Button white={this.state.scroll} classes={call_link} value={'nav.call'}/>
                        </Link>
                    </div>
                </div>
                </div>

            </div>
            {this.state.mobile && <MobileBtn btnClicked={this.updateBtnState.bind(this)}/>}
            <div style={{paddingBottom: !this.state.mobile ? '100px' : '50px'}}/>
            {this.state.mobile && <MNavbar/>}
            {/*<MNavbar/>*/}
        </section>;
    }
}

export default withLocalize(Navbar);

