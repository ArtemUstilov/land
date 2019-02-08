import React, { Component } from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clock from "../img/clock.png";
import Img00 from '../img/footer/0.jpg';
import Img01 from '../img/footer/1.jpg';
import Img02 from '../img/footer/2.jpg';
import Img03 from '../img/footer/3.jpg';
import Img04 from '../img/footer/4.jpg';
import Img05 from '../img/footer/5.jpg';
import Img06 from '../img/footer/6.jpg';
import Img07 from '../img/footer/7.jpg';
import Img08 from '../img/footer/8.jpg';
import Img09 from '../img/footer/9.jpg';

class Portfolio extends Component {
    render() {
        const settings = {
            className:'portfolio-slider',
            dots: true,
            arrows:false,
            infinite: true,
            slidesToShow: 3,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 800,
            rows: 2,
            slidesToScroll: 3,
            adaptiveHeight:true,
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
                                    <img className="img-fluid" src={Img00}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img01}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img02}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img03}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img04}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img05}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img06}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img07}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img08}/>
                                </div>
                                <div>
                                    <img className="img-fluid" src={Img09}/>
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

export default Portfolio;
