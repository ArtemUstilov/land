import React, {Component} from 'react';
import '../styles/Contacts.css'
import '../styles/settings.css'
import Tel from '../img/tel.PNG'
import Map from '../img/map.PNG'
import Mail from '../img/mail.PNG'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/contacts.json'

import Button from './Button'
import logo from '../img/bg.jpg'
import makaka from '../img/download.jpg'

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
    }

    render() {
        return (
            <section id='contacts'>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12">
                            <h1 className='title'><Translate id="contacts.title"/></h1>
                            <div className='map-responsive contacts-map'>
                                <iframe width="1000" height="300"
                                        src="https://maps.google.com/maps?width=800&amp;height=440&amp;hl=en&amp;q=Khmelnytskyi%2C%20Podylska%2010%2F3+(Office)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                            </div>
                            <div className="row icons">
                                <div className="col-md-4 icon-box">
                                    <a  href="https://www.google.com/maps?ll=49.427057,26.976849&z=14&t=m&hl=en&gl=US&mapclient=embed&q=Podil%27s%27ka+St,+10+Khmel%27nyts%27kyi+Khmel%27nyts%27ka+oblast+29000"
                                       rel='noopener noreferrer' target='_blank'>
                                        <img src={Map} alt="" className="icon-c"/>
                                    </a>
                                    <p style={{fontSize: "11px"}}>г. Хмельницкий, <br/>ул. Подольская 10/3</p>
                                </div>
                                <div className="col-md-4 icon-box">
                                    <a href="tel:+380971234567"><img src={Tel} alt="" className="icon-c"/></a>
                                    <p style={{fontSize: "13px"}}><a href="tel:+380971234567"> +38 (097) 12 34 567 </ a>
                                    </p>
                                </div>
                                <div className="col-md-4 icon-box">
                                    <a href="mailto:okolita_design@gmail.com"
                                       rel='noopener noreferrer'
                                       target='_blank'><img src={Mail} alt="" className="icon-c"/></a>
                                    <p style={{fontSize: "13px"}}><a href="mailto:okolita_design@gmail.com"
                                                                     rel='noopener noreferrer'
                                                                     target='_blank'>okolita_design@gmail.com</a></p>
                                </div>
                            </div>
                            <p>Симон Болівар — найвідоміший політичний діяч Південної Америки. Його численні пам'ятники,
                                статуї є чи
                                не в кожному місті Венесуели. Його ім'ям називають вулиці, установи тощо.</p>
                            <br/>
                            <p>Вплив і авторитет Болівара в першій половині XIX століття примусили зважати на його думку
                                мало не
                                півсвіту. Його всерйоз побоювалися створені незадовго до цього Сполучені Штати Північної
                                Америки,
                                адже під боком у них ось-ось мала виникнути нова й досить впливова держава</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withLocalize(Contacts);