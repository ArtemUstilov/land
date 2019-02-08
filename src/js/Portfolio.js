import React, { Component } from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clock from "../img/clock.png";
import Img1_1 from '../img/portfolio/first/1.jpg';
import Img1_2 from '../img/portfolio/first/2.jpg';
import Img1_3 from '../img/portfolio/first/3.jpg';
import Img1_4 from '../img/portfolio/first/4.jpg';
import Img1_5 from '../img/portfolio/first/5.jpg';
import Img1_6 from '../img/portfolio/first/6.jpg';
import Img2_1 from '../img/portfolio/second/1.jpg';
import Img2_2 from '../img/portfolio/second/2.jpg';
import Img2_3 from '../img/portfolio/second/3.jpg';
import Img2_4 from '../img/portfolio/second/4.jpg';
import Img2_5 from '../img/portfolio/second/5.jpg';
import Img2_6 from '../img/portfolio/second/6.jpg';
import Img3_1 from '../img/portfolio/third/1.jpg';
import Img3_2 from '../img/portfolio/third/2.jpg';
import Img3_3 from '../img/portfolio/third/3.jpg';
import Img3_4 from '../img/portfolio/third/4.jpg';
import Img3_5 from '../img/portfolio/third/5.jpg';
import Img3_6 from '../img/portfolio/third/6.jpg';
import Img4_1 from '../img/portfolio/fourth/1.jpg';
import Img4_2 from '../img/portfolio/fourth/2.jpg';
import Img4_3 from '../img/portfolio/fourth/3.jpg';
import Img4_4 from '../img/portfolio/fourth/4.jpg';
import Img4_5 from '../img/portfolio/fourth/5.jpg';
import Img4_6 from '../img/portfolio/fourth/6.jpg';
import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/main.json'
import {withLocalize} from 'react-localize-redux'

class Portfolio extends Component {
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
        const settings = {
            className:'portfolio-slider',
            dots: true,
            arrows:true,
            infinite: true,
            slidesToShow: 3,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 800,
            rows: 2,
            slidesToScroll: 3,
            adaptiveHeight:true,
            responsive: [
                {
                    breakpoint: 756,
                    settings: {
                        arrows:false

                    }
                }
            ]
        };
        return (
            <section id={'portfolio'}>
                <div className="container-fluid ">
                    <div className="row d-flex text-center justify-content-center">
                        <div className="col-md-8 col-xs-12">
                            <h3 className="text-center about-logo title">
                           Портфолио
                        </h3>
                        </div>
                        <div className="col-md-9 col-lg-8 col-xs-12">
                            <Slider  {...settings}>

                                <div>
                                    <img className="img-fluid" src={Img1_1}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img1_2}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img1_3}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img1_4}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img1_5}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img1_6}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img2_1}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img2_2}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img2_3}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img2_4}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img2_5}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img2_6}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img3_1}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img3_2}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img3_3}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img3_4}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img3_5}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img3_6}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img4_1}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img4_2}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img4_3}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img4_4}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img4_5}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img4_6}/>
                                </div>

                            </Slider>
                        </div>

                    </div>
                </div>
            <br/>
                <br/>
                <br/>
            </section>
        );
    }
}

export default withLocalize(Portfolio);
