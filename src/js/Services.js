import React, {Component} from 'react';
import '../styles/Services.css'
import '../styles/settings.css'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/services.json'
import Button from "./Button.js";
import logo from '../img/bg.jpg'
import design2 from '../img/design2.jpg'
import {renderToStaticMarkup} from "react-dom/server";
import ReactModal from 'react-modal';
import Img1 from '../img/1.jpg';
import s1 from '../img/step1.jpg';
import s5 from '../img/step5.jpg';
import s6 from '../img/step6.jpg';
import s7 from '../img/step7.jpg';
import Img2 from '../img/2.jpg';
import Img3 from '../img/3.jpg';
import Img4 from '../img/4.jpg';
import Img5 from '../img/5.jpg';
import Img6 from '../img/6.jpg';
import Img7 from '../img/7.jpg';


class Describe extends Component {

    render() {
        return (<div className={`box box${this.props.num % 2}`}>
                <h5 className="box-title" style={{fontWeight:'800'}}><Translate id="services.stepTitle"/> {this.props.num}</h5>
                <p className='box-text'>{this.props.text}</p>
            </div>
        )
    }
}

class Services extends Component {
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

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return <div className="services">
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 no-padding">
                            <h1 className='title'><Translate id="services.title"/></h1>
                            <img src={design2} alt='' className="img-fluid"/>
                            <div className='serv-box'>
                                <h5 className="title" style={{textAlign: 'left', padding: '20px 8%'}}>OKOLITA
                                    DESIGN</h5>
                                <div>
                                    <h4><Translate id="services.pack1Title"/></h4>
                                    <ul>
                                        <li><Translate id="services.li1"/></li>
                                        <li><Translate id="services.li2"/></li>
                                        <li><Translate id="services.li3"/></li>
                                        <li><Translate id="services.li4"/></li>
                                        <li><Translate id="services.li5"/></li>
                                        <li><Translate id="services.li6"/></li>
                                        <li><Translate id="services.li7"/></li>
                                    </ul>
                                </div>
                                <br/>
                                <div>
                                    <h4><Translate id="services.pack2Title"/></h4>
                                    <ul>
                                        <li><Translate id="services.li1"/></li>
                                        <li><Translate id="services.li2"/></li>
                                        <li><Translate id="services.li3"/></li>
                                        <li><Translate id="services.li4"/></li>
                                        <li><Translate id="services.li5"/></li>
                                        <li><Translate id="services.li6"/></li>
                                        <li><Translate id="services.li7"/></li>
                                        <li><Translate id="services.li8"/></li>
                                        <li><Translate id="services.li9"/></li>
                                        <li><Translate id="services.li10"/></li>
                                        <li><Translate id="services.li11"/></li>
                                        <li><Translate id="services.li12"/></li>
                                        <li><Translate id="services.li13"/></li>
                                        <li><Translate id="services.li14"/></li>
                                        <li><Translate id="services.li15"/></li>
                                        <li><Translate id="services.li16"/></li>
                                        <li><Translate id="services.li17"/></li>
                                        <li><Translate id="services.li18"/></li>
                                        <li><Translate id="services.li19"/></li>
                                    </ul>
                                </div>
                                <br/>
                                <div>
                                    <h4>Пакет «Премиум»</h4>
                                    <ul>
                                        <li><Translate id="services.li1"/></li>
                                        <li><Translate id="services.li2"/></li>
                                        <li><Translate id="services.li3"/></li>
                                        <li><Translate id="services.li4"/></li>
                                        <li><Translate id="services.li5"/></li>
                                        <li><Translate id="services.li6"/></li>
                                        <li><Translate id="services.li7"/></li>
                                        <li><Translate id="services.li8"/></li>
                                        <li><Translate id="services.li9"/></li>
                                        <li><Translate id="services.li10"/></li>
                                        <li><Translate id="services.li11"/></li>
                                        <li><Translate id="services.li12"/></li>
                                        <li><Translate id="services.li13"/></li>
                                        <li><Translate id="services.li14"/></li>
                                        <li><Translate id="services.li15"/></li>
                                        <li><Translate id="services.li16"/></li>
                                        <li><Translate id="services.li17"/></li>
                                        <li><Translate id="services.li18"/></li>
                                        <li><Translate id="services.li19"/></li>
                                        <li><Translate id="services.li20"/></li>
                                        <li><Translate id="services.li21"/></li>
                                    </ul>

                                </div>
                                <br/>
                                <h5><Translate id="services.resultTitle"/></h5>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id={'services-section3'}>
                <div className="title-box ps-top-to-bottom no-padding">
                    <h1 className='white-text title too-big white-title' style={{padding: '10px'}}><Translate
                        id="services.from"/></h1>
                    <p className='white-text'><Translate id ="services.doIt"/></p>
                    <Button green={true} onclick={this.handleOpenModal} value={'services.sign'} classes='proj-btn'/>
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
                                    <input name={'phone'} placeholder={'Ваш телефон'}/>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <div className={'col-12'}>
                                    <Button green={true} classes={'form-btn black-green'}
                                            value={'footer.consultation'}/>
                                </div>
                            </div>
                        </form>
                    </ReactModal>
                </div>
            </section>
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="сol-xl-9 col-sm-12 col-md-9  col-12  no-padding">
                            <div className="work-box float1">
                                <Describe num='1'
                                          text={<Translate id ="services.step1"/>}
                                         />
                                <img src={s1} alt='' className="box-behind"/>
                            </div>
                            <div className="work-box float0">
                                <Describe num='2'
                                          text={<Translate id ="services.step2"/>}/>
                                <img src={Img2} alt='' className="box-behind"/>
                            </div>
                            <div className="work-box float1">
                                <Describe num='3'
                                          text={<Translate id ="services.step3"/>}
                                          />
                                <img src={Img3} alt='' className="box-behind"/>
                            </div>
                            <div className="work-box float0">
                                <Describe num='4'
                                          text={<Translate id ="services.step4"/>}
                                          />
                                <img src={Img4} alt='' className="box-behind"/>
                            </div>
                            <div className="work-box float1">
                                <Describe num='5'
                                          text={<Translate id ="services.step5"/>}
                                          />
                                <img src={s5} alt='' className="box-behind"/>
                            </div>
                            <div className="work-box float2">
                                <Describe num='6'
                                          text={<Translate id ="services.step6"/>}
                                          />
                                <img src={s6} alt='' className="box-behind"/>
                            </div>
                            <div className="work-box float1">
                                <Describe num='7'
                                          text={<Translate id ="services.step7"/>}
                                          />
                                <img src={s7} alt='' className="box-behind"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}

export default withLocalize(Services);
