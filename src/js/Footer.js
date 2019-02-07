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


class SliderFooter extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
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
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>
                <div>
                    <img className="img-fluid" src={clock}/>
                </div>


            </Slider>

        );
    }
}

class Footer extends Component {
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
                        <div className="col-12 no-padding">
                            <h3 className="text-center about-logo title small black-background">
                            </h3>


                        </div>
                        <div className={'footer-info col-12'}>
                            <div className={'row d-flex  justify-content-center'}>
                                <div className={'col-12 col-md-10 col-lg-9'}>
                                    <div className={'row d-flex  justify-content-between footer-info-cell'}>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p><img className=" footer-logo" src={logo}/></p>
                                        </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p><a className={'phone'} href="tel:+380971234567">+38 (097) 12 34 567</ a></p>
                                        </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p><a className={'mail'} href="mailto:okolitadesign@gmail.com">okolitadesign@gmail.com</a></p>
                                            </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                    <p>dasdsa</p>
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

export default Footer;
