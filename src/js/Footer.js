import React, { Component } from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Portfolio extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            autoplay:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
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
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                                <div>
                                    <h3>7</h3>
                                </div>
                                <div>
                                    <h3>8</h3>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
