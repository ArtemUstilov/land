import React, {Component} from 'react';
import logo from '../img/about-bg.jpg';
import item1 from '../img/footer/item1.png';
import item2 from '../img/footer/item2.png';
import item3 from '../img/footer/item3.png';
import item4 from '../img/footer/item4.png';
import item5 from '../img/footer/item5.png';
import item6 from '../img/footer/item6.png';
import '../styles/About.css'
import YouTube from 'react-youtube';
import Button from './Button'

import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/about.json'
import {Translate, withLocalize} from 'react-localize-redux'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactModal from 'react-modal';


class About extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
  componentDidMount() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {

        const opts = {
            playerVars: {
                autoplay: 0,

            }
        };
        return (

            <section id="about">

                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">

                        <div className="col-md-8 col-xs-12">
                            <ScrollAnimation animateIn='fadeIn'
                                             animateOut='fadeOut'>
                            <h3 className="text-center about-logo title">

                                <Translate id='about.studio'/>
                            </h3>
                            </ScrollAnimation>
                            <div>
                                <img className="img-fluid" src={logo}/>
                            </div>
                            <br/>
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <ScrollAnimation animateIn='fadeIn'
                                             animateOut='fadeOut'>
                            <h6>OKOLITA DESIGN</h6>
                            </ScrollAnimation>
                            <br/>
                            <ScrollAnimation animateIn='fadeIn'
                                             animateOut='fadeOut'>
                            <p><Translate id='about.aboutFirst1'/><b>Okolita Design!</b> <br/><Translate id='about.aboutFirst2'/></p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn'
                                             animateOut='fadeOut'>
                            <p> <Translate id='about.aboutFirst3'/> </p>
                            </ScrollAnimation>
                        </div>

                        <div className="col-md-8 col-xs-12">
                            <ScrollAnimation animateIn='fadeIn'
                                             animateOut='fadeOut'>
                            <p><b><Translate id='about.diff'/></b>
                            </p>
                            </ScrollAnimation>
                            <ul>
                                <li>
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <Translate id='about.diff1'/>
                                    </ScrollAnimation>
                                </li>
                                <li>
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <Translate id='about.diff2'/>
                                    </ScrollAnimation>
                                </li>
                                <li>
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <Translate id='about.diff3'/>
                                    </ScrollAnimation>
                                </li>
                            </ul>
                            <p>
                                <ScrollAnimation animateIn='fadeIn'
                                                 animateOut='fadeOut'>
                                <Translate id='about.but'/>
                                </ScrollAnimation>
                            </p>


                        </div>

                    </div>
            <br/>
            <h5 className={'text-center'}><Translate id='about.so'/></h5>
            <br/>
                    <div className="d-flex justify-content-center advantages ">
                        <div className="col-md-10 col-sm-10">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                <div className="row">
                                    <div className="col-4 adv-img-container">
                                        <img className="img-fluid adv-img" src={item1} alt=''/>
                                    </div>
                                    <div className="col-8 advantage">
                                        <span className="advantage-text"><Translate id='about.adv1'/></span>
                                    </div>
                                </div>
                                    </ScrollAnimation>
                            </div>

                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item2} alt=''/>
                                        </div>
                                        <div className="col-8 advantage">
                                            <span className="advantage-text"><Translate id='about.adv2'/></span>
                                        </div>
                                    </div>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item3} alt=''/>
                                        </div>
                                        <div className="col-8 advantage">
                                            <span className="advantage-text"><Translate id='about.adv3'/></span>
                                        </div>
                                    </div>
                                    </ScrollAnimation>
                                </div>

                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item4}/>
                                        </div>
                                        <div className="col-8 advantage">
                                            <span className="advantage-text"><Translate id='about.adv4'/></span>
                                        </div>
                                    </div>
                                    </ScrollAnimation>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item5}/>
                                        </div>

                                        <div className="col-8 advantage">
                                            <ScrollAnimation animateIn='fadeIn'
                                                             animateOut='fadeOut'>
                                            <span className="advantage-text"><Translate id='about.adv5'/></span>
                                            </ScrollAnimation>
                                        </div>

                                    </div>
                                    </ScrollAnimation>
                                </div>

                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <ScrollAnimation animateIn='fadeIn'
                                                     animateOut='fadeOut'>
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item6}/>
                                        </div>
                                        <div className="col-8 advantage">
                                            <span className="advantage-text"><Translate id='about.adv6'/></span>
                                        </div>
                                    </div>
                                    </ScrollAnimation>
                                </div>




                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-xs-12">
                            <ScrollAnimation animateIn='fadeIn'
                                             animateOut='fadeOut'>
                    <figure className="quote">
                        <p className="curly-quotes"><Translate id='about.fraza'/>
                        </p>
                    </figure>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <br/>
                    {/*<div className="row title-white d-flex justify-content-center">
                        <div className="col-12">
                            <h3 className="text-center about-logo title title-white">
                                Как мы работаем
                            </h3>
                        </div>
                        <div className="col-12 col-sm-8 title-white ">
                            <YouTube
                                videoId="2g811Eo7K8U"
                                opts={opts}
                                onReady={this._onReady}
                                className={'video white-border'}
                            />
                        </div>
                        <div className="col-8 d-flex justify-content-center">
                            <Button white={true} value="about.btn" onclick={this.handleOpenModal} classes='proj-btn'/>
                        </div>
                    </div>*/}
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                    >
                        <form className={'modal-form text-center'}>
                            <h5>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</h5>
                            <p className={'wait'}>Закажите консультацию и мы свяжемся с Вами через
                                несколько минут</p>
                            <br/>
                            <input name={'name'}
                                   placeholder={'Ваше имя'}/>
                            <br/>
                            <br/>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <input name={'phone'}  placeholder={'Ваш телефон'}/>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <div className={'col-12'}>
                                    <Button green="true" classes={'form-btn black-green'}value={'footer.consultation'}/>
                                </div>
                            </div>
                        </form>
                    </ReactModal>
                </div>
            </section>
        );
    }
}

export default withLocalize(About);
