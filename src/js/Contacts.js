import React, {Component} from 'react';
import '../styles/Contacts.css'
import '../styles/settings.css'
import Tel from '../img/tel.PNG'
import Map from '../img/map.PNG'
import Mail from '../img/mail.PNG'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/contacts.json'
import ScrollAnimation from 'react-animate-on-scroll';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
    }
    componentDidMount() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    render() {
        return (
            <section id='contacts'>
            <div className="container-fluid ">
            <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-12">
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
            <h1 className='title'><Translate id="contacts.title"/></h1>
            </ScrollAnimation>
            <div className='map-responsive contacts-map'>
            <iframe title='111' width="1000" height="300"
        src="//maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%BA%D0%B8%D0%B9%20%20%D0%A3%D0%BB.%20%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%205+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
            <div className="row icons">
            <div className="col-md-4 icon-box">
            <a  href="https://www.google.com/maps?ll=49.427057,26.976849&z=14&t=m&hl=en&gl=US&mapclient=embed&q=Podil%27s%27ka+St,+10+Khmel%27nyts%27kyi+Khmel%27nyts%27ka+oblast+29000"
        rel='noopener noreferrer' target='_blank'>
            <img src={Map} alt="" className="icon-c"/>
            </a>
            <p style={{fontSize: "11px"}}>г. Хмельницкий, <br/>Ул. Староконстантиновское шоссе ,5 </p>
        </div>
        <div className="col-md-4 icon-box">
            <a href="tel:+380971234567"><img src={Tel} alt="" className="icon-c"/></a>
            <p style={{fontSize: "13px"}}><a href="tel:+380971234567"> +38(097) 904 30 38</ a>
        </p>
        </div>
        <div className="col-md-4 icon-box">
            <a href="mailto:okolitadesign@gmail.com"
        rel='noopener noreferrer'
        target='_blank'><img src={Mail} alt="" className="icon-c"/></a>
            <p style={{fontSize: "13px"}}><a href="mailto:okolitadesign@gmail.com"
        rel='noopener noreferrer'
        target='_blank'>okolitadesign@gmail.com</a></p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    )
    }
}

export default withLocalize(Contacts);
