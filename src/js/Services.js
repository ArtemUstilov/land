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

class Describe extends Component {

    render() {
        return (<div className={`box box${this.props.num % 2}`}>
                <img src={this.props.icon} alt="" className="box-icon"/>
                <h5 className="box-title">ШАГ {this.props.num}</h5>
                <p className='box-text'>{this.props.text}</p>
            </div>
        )
    }
}

class Services extends Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                {name: "Русский", code: "ru"},
                {name: "Українська", code: "ua"}
            ],
            options: {renderToStaticMarkup}
        });
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
        return <div className="services">
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 no-padding">
                <h1 className='title'><Translate id="services.title"/></h1>
                <img src={design2} alt='' className="img-fluid"/>
                <div className='serv-box'>
                <h5 className="title" style={{textAlign: 'left', padding: '20px 8%'}}>OKOLITA DESIGN</h5>
                    <div>
                    <h4>Пакет «Перепланировка»</h4>
               <ul>
                   <li>Выезд на объект и обмеры помещения</li>
                   <li>Фотофиксация объекта</li>
                   <li>Несколько вариантов перепланировок с расстановкой мебели и сантехники</li>
                   <li>План обмерный помещения</li>
                   <li>Схема демонтажа</li>
                   <li>Схема монтажа	новых простенков</li>
                   <li>План размещения мебели/техники, сантехники</li>
               </ul>
                    </div>
                    <br/>
                    <div>
                        <h4>Пакет «Стандарт»</h4>
                        <ul>
                            <li>Выезд на объект и обмеры помещения</li>
                            <li>Фотофиксация объекта</li>
                            <li>Несколько вариантов перепланировок с расстановкой мебели и сантехники</li>
                            <li>План обмерный помещения</li>
                            <li>Схема демонтажа</li>
                            <li>Схема монтажа	новых простенков</li>
                            <li>План размещения мебели/техники, сантехники</li>
                            <li>План расстановки сантехнического оборудования</li>
                            <li>План пола с учетом покрытия и учетом площади напольного покрытия</li>
                            <li>План потолка</li>
                            <li>Схема зон теплого пола, размещение радиаторов отопления (в зависимости от вида отопления)</li>
                            <li>План размещения светильников и других видов осветительных приборов</li>
                            <li>План размещения розеток</li>
                            <li>План размещения включателей</li>
                            <li>Развертки ванных комнат с просчетом отделочных материалов </li>
                            <li>Развертки стен всех помещений(с учетом покрытия)</li>
                            <li>Визуализация каждого помещения, с нескольких ракурсов</li>
                            <li>4 выезда (на объект или в магазины для подбора или материалов)</li>
                            <li>Объяснение чертежей строителям и консультация по техническим вопросам</li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        <h4>Пакет «Премиум»</h4>
                        <ul>
                            <li>Выезд на объект и обмеры помещения</li>
                            <li>Фотофиксация объекта</li>
                            <li>Несколько вариантов перепланировок с расстановкой мебели и сантехники</li>
                            <li>План обмерный помещения</li>
                            <li>Схема демонтажа</li>
                            <li>Схема монтажа	новых простенков</li>
                            <li>План размещения мебели/техники, сантехники</li>
                            <li>План расстановки сантехнического оборудования</li>
                            <li>План пола с учетом покрытия и учетом площади напольного покрытия</li>
                            <li>План потолка</li>
                            <li>Схема зон теплого пола, размещение радиаторов отопления (в зависимости от вида отопления)</li>
                            <li>План размещения светильников и других видов осветительных приборов</li>
                            <li>План размещения розеток</li>
                            <li>План размещения включателей</li>
                            <li>Развертки ванных комнат с просчетом отделочных материалов </li>
                            <li>Развертки стен всех помещений(с учетом покрытия)</li>
                            <li>Визуализация каждого помещения, с нескольких ракурсов</li>
                            <li>4 выезда (на объект или в магазины для подбора или материалов)</li>
                            <li>Объяснение чертежей строителям и консультация по техническим вопросам</li>
                            <li>Авторское сопровождение (Выезд на объект 1-2 раза в неделю, ответим на вопросы строителей при встрече или в режими онлайн (вайбер/телефону/телеграм)</li>
                            <li>Комплектация: подбор отделочных материалов  (плитка, напольного покрытия, обои/краска/декоративная штукатурка и т.д.),
                                корпусной мебели , мягкой мебели, светильников , сантехники, текстиля ,...)</li>
                        </ul>

                    </div>
                    <br/>
                    <h5>В результате на руки вы получаете папку формата А3 с проектом</h5>
                </div>
                        </div></div></div>

            </section>
            <section id={'services-section3'}>
                <div className="title-box ps-top-to-bottom no-padding">
                    <h1 className='white-text title too-big white-title' style={{padding: '10px'}}><Translate id="services.from"/></h1>
                    <p className='white-text'>Запишитесь на консультацию дизайнера</p>
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
                                    <input name={'phone'}  placeholder={'Ваш телефон'}/>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <div className={'col-12'}>
                                    <Button green={true} classes={'form-btn black-green'}value={'footer.consultation'}/>
                                </div>
                            </div>
                        </form>
                    </ReactModal>
                </div>
            </section>
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 no-padding">
                <div className="work-box float0">
                    <Describe num='2'
                              text="2 березня 2006 року одностайним рішенням Національних зборів (парламенту)
                                   Венесуели були ухвалені зміни в державній символіці, запропоновані президентом країни"
                              icon={logo}/>
                    <img src={logo} alt='' className="box-behind"/>
                </div>
                <div className="work-box float1">
                    <Describe num='3'
                              text="Президент Венесуели Уго Чавес, представляючи нову символіку, назвав своє нововведення
                                  «зіркою Болівара»"
                              icon={logo}/>
                    <img src={logo} alt='' className="box-behind"/>
                </div>
                        </div></div></div>
            </section>
        </div>;
    }
}

export default withLocalize(Services);
