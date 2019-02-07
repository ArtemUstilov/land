import React, {Component} from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clock from '../img/clock.png';

class Footer extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            autoplay: true,
            autoplaySpeed:2000,
            rows: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
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
            <section id={'footer'}>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">

                            <Slider className={'text-center '} {...settings}>
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
            </section>
        );
    }
}

export default Footer;
