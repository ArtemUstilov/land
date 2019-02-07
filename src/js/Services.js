import React, {Component} from 'react';
import '../styles/Services.css'
import '../styles/settings.css'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/services.json'
import Button from "./Button.js";
import logo from '../img/bg.jpg'

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
        this.props.addTranslation(contactsTranslations);
    }

    render() {
        return <div className="services">
            <section id={'services-section1'}>
                <h1 className='title'><Translate id="services.title"/></h1>
                <img src={logo} alt='' className="img-fluid"/>
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
            </section>
            <section id={'services-section2'} className={'section'}>
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
            </section>
            <section id={'services-section3'}>
                <div className="title-box ps-top-to-bottom">
                    <h1 className='white-text title white-title' style={{padding: '10px'}}>С чего начать
                        дизайн?</h1>
                    <p className='white-text'>Запишитесь на консультацию дизайнера</p>
                    <Button white={true} value="ЗАПИСАТЬСЯ СЕЙЧАС" classes='proj-btn'/>
                </div>
            </section>
            <section id={'services-section4'} className={'section'}>
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
            </section>
        </div>;
    }
}

export default withLocalize(Services);