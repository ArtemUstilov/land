import React, {Component} from 'react';
import '../styles/Footer.css'
import '../styles/settings.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Translate, withLocalize} from 'react-localize-redux'
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
import ReactModal from 'react-modal';
import contactsTranslations from '../translations/footer.json'


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
        let images =[Img00,Img01,Img02,Img03,Img04,Img05,Img06,Img07,Img08,Img09]
        return (


            <Slider className={'text-center footer-slider'} {...settings}>
                {images.map((x,i)=>{return <div key={i}>
                    <a target={'_blank'} href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={x}/>
                    </a>
                </div>})}
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
        return (
            <section id={'footer'}>
                <div className="container-fluid ">
                    <div className="footer-form-section gray-background row d-flex justify-content-center">
                        <div className="col-12">
                            <h3 className="text-center about-logo title">
                                <Translate id={'footer.title-1'}/>

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
                                                <br/>
                                                <div className={'col-12'}>
                                                    <Button green="true" classes={'form-btn'}value={'footer.consultation'}/>
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
                                            <p><a className={'phone'} href="tel:+380971234567"><img
                                                className={'img-fluid'} src={phone}/> +38 (097) 12 34 567</ a></p>
                                        </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                            <p><a className={'mail'} href="mailto:okolitadesign@gmail.com"><img
                                                src={mail}/> okolitadesign@gmail.com</a></p>
                                        </div>
                                        <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                                            <p className={"footer-button-box"}><Button onclick={this.handleOpenModal} white={true}
                                                                                       value={'footer.recall'}
                                                                                       classes='black-background footer-button '/>
                                                <ReactModal
                                                    isOpen={this.state.showModal}
                                                    contentLabel="onRequestClose Example"
                                                    onRequestClose={this.handleCloseModal}
                                                >
                                                    <p>Modal text!</p>
                                                    <button onClick={this.handleCloseModal}>Close Modal</button>
                                                </ReactModal>
                                            </p>
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
