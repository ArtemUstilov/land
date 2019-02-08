import React, { Component } from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clock from "../img/clock.png";
class Portfolio extends Component {
    render() {
        var settings = {
            className:"d-flex justify-content-center",
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay:true,
            autoplaySpeed:2000,
            rows:2,
            arrows:false,


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
                        <div className="col-md-5 col-xs-10">
                            <Slider  {...settings}>
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
                        </div>

                    </div>
                </div>
            <br/>
            </section>
        );
    }
}

export default Portfolio;
