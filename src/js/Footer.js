import React, {Component} from 'react';
import '../styles/Footer.css'
import '../styles/settings.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clock from '../img/clock.png';
import me from '../img/download.jpg';
import logo from '../img/logo.png';
import Button from './Button'
import phone from '../img/footer/phone.jpg';
import mail from '../img/footer/mail.jpg';
import Img00 from '../img/footer/Insta/0.jpg';
import Img01 from '../img/footer/Insta/1.jpg';
import Img02 from '../img/footer/Insta/2.jpg';
import Img03 from '../img/footer/Insta/3.jpg';
import Img04 from '../img/footer/Insta/4.jpg';
import Img05 from '../img/footer/Insta/5.jpg';
import Img06 from '../img/footer/Insta/6.jpg';
import Img07 from '../img/footer/Insta/7.jpg';
import Img08 from '../img/footer/Insta/8.jpg';
import Img09 from '../img/footer/Insta/9.jpg';
import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/main.json'
import {withLocalize} from 'react-localize-redux'


class SliderFooter extends Component {
    render() {



        var settings = {
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
            rows: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (


            <Slider className={'text-center footer-slider'} {...settings}>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img00} />
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img01}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img02}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img03}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img04}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img05}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img06}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img07}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img08}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                    <img className="img-fluid" src={Img09}/>
                    </a>
                </div>



            </Slider>

        );
    }
}

class Footer extends Component {
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
    }
    render() {

        return (
            <section id={'footer'}>
                <div className="container-fluid ">
                    <div className="footer-form-section gray-background row d-flex justify-content-center">
                        <div className="col-12">
                            <h3 className="text-center about-logo title">
                                Консультация с дизайнером
                            </h3>


                        </div>

                        <div className="col-12  d-flex justify-content-center">
                            <div className="col-lg-9 col-sm-12">
                                <div className={'row d-flex justify-content-center'}>
                                    <div className="col-md-7 col-sm-12">
                                        <img className={'me-photo'} src={me}/>
                                        <h5>Венесуела — країна гір, рівнин і лісів.</h5>
                                        <p>Венесуела — країна гір, рівнин і лісів. Основні природні райони: гірська
                                            область Анд,
                                            западина Маракайбо, Льянос і Гвіанське плоскогір'я.</p>

                                        <p>Гори Анди й озеро Маракайбо на
                                            північному-заході, рівнини в центрі, дельта річки Оріноко на сході, Гаянська
                                            височина на
                                            південному-сході.</p>

                                        <figure className="quote">
                                            <p className="curly-quotes">На півдні країни існує таке рідкісне явище, як
                                                біфуркація річок: від Оріноко у верхній
                                                течії відгалужується річка Касік'яре, що несе свої води в Ріу-Негру,
                                                притоку Амазонки
                                            </p>
                                        </figure>
                                    </div>
                                    <div className={'col-md-1 col-sm-12'}></div>
                                    <div className="form-footer-box col-md-4 col-sm-7 text-center">
                                        <form className={'footer-form '}>
                                            <h5>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</h5>
                                            <p className={'wait'}>Закажите консультацию и мы свяжемся с Вами через
                                                несколько минут</p>
                                            <br/>
                                            <input name={'name'} placeholder={'Ваше имя'}/>
                                            <br/>
                                            <br/>
                                            <div className={'row'}>
                                                <div className={'col-12'}>
                                                    <input name={'phone'} placeholder={'Ваш телефон'}/>
                                                </div>
                                                <div className={'col-12'}>
                                                    <Button white={true} value="ЗАПИСАТЬСЯ СЕЙЧАС" classes='proj-btn'/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 no-padding">
                            <h3 className="text-center about-logo title title-white">
                                Наш Instagram
                            </h3>


                        </div>
                        <div className={'col-12 no-padding'}>
                            <SliderFooter/>
                        </div>
                        <div className={'footer-info col-12'}>
                            <div className={'row d-flex  justify-content-center'}>
                                <div className={'col-12 col-md-10 col-lg-9'}>
                                    <div className={'row d-flex  justify-content-between footer-info-cell'}>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p><img className=" footer-logo" src={logo}/></p>
                                        </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p><a className={'phone'} href="tel:+380971234567"><img className={'img-fluid'} src={phone}/> +38 (097) 12 34 567</ a></p>
                                        </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p><a className={'mail'} href="mailto:okolitadesign@gmail.com"><img src={mail}/> okolitadesign@gmail.com</a></p>
                                            </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p className={"footer-button-box"}><Button white={true} value="Заказать звонок" classes='black-background footer-button '/></p>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 no-padding footer-privacy">
                            <p className="text-center about-logo black-background">
                                @ Okolita_design 2019
                            </p>


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withLocalize(Footer);
