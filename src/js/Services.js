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
                <p>На тлі різкого погіршення соціально-економічної ситуації у Венесуелі у 2010-х рр. контроль над
                    Національною асамблеєю після загальних виборів 30 липня 2017 року перебрали опозиційні партії, які
                    звинувачували президента Ніколаса Мадуро і його уряд у неефективному управлінні державою. У Каракасі
                    й низці інших міст пройшли багатотисячні демонстрації протести, які переростали в масові сутички з
                    поліцією.</p>
                <p>Проведені в травні 2018 президентські вибори, на яких перемогу здобув чинний президент Н. Мадуро,
                    опозиція бойкотувала й закликала не визнавати їхніх результатів, посилаючись на численні факти
                    порушень, зокрема масових фальсифікацій.</p>
                </div>
                        </div></div></div>

            </section>
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 no-padding">
                <div className="work-box float1">
                    <Describe num='1'
                              text='5 серпня 2004 року у Венесуелі відбувся референдум щодо можливої
                                  дострокової відставки глави держави Уго Чавеса'
                              icon={logo}/>
                    <img src={logo} alt='' className="box-behind"/>
                </div>
                <div className="work-box float0">
                    <Describe num='2'
                              text="2 березня 2006 року одностайним рішенням Національних зборів (парламенту)
                                   Венесуели були ухвалені"
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
            <section id={'services-section3'}>
                <div className="title-box ps-top-to-bottom no-padding">
                    <h1 className='white-text title white-title' style={{padding: '10px'}}>С чего начать
                        дизайн?</h1>
                    <p className='white-text'>Запишитесь на консультацию дизайнера</p>
                    <Button white={true} onclick={this.handleOpenModal} value={'services.sign'} classes='proj-btn'/>
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