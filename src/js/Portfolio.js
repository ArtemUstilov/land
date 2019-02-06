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
                        slidesToScroll: 1,

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
            <section id={'portfolio'}>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-xs-12">
                            <h3 className="text-center about-logo title">
                           Портфолио
                        </h3>
                            <Slider {...settings}>
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
                                <div>
                                    <h3>9</h3>
                                </div>
                                <div>
                                    <h3>10</h3>
                                </div>
                                <div>
                                    <h3>11</h3>
                                </div>
                                <div>
                                    <h3>12</h3>
                                </div>
                                <div>
                                    <h3>13</h3>
                                </div>
                                <div>
                                    <h3>14</h3>
                                </div>
                                <div>
                                    <h3>15</h3>
                                </div>
                                <div>
                                    <h3>16</h3>
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
