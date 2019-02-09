import React, { Component } from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedTeg from './Animated'
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
import 'react-image-lightbox/style.css';
import ReactModal from 'react-modal';

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
        this.images = [Img1_1, Img1_2, Img1_3, Img1_4, Img1_5, Img1_6, Img2_1, Img2_2, Img2_3, Img2_4,
            Img2_5, Img2_6, Img3_1, Img3_2, Img3_3, Img3_4, Img3_5, Img3_6, Img4_1, Img4_2,
            Img4_3, Img4_4, Img4_5, Img4_6];
        this.state={
            ImgMap:[],
            showModal: false
        }
        this.props.addTranslation(contactsTranslations);
        this.renderImages = this.renderImages.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    renderImages(imgs){
        if(!imgs.length)
            return;
        setTimeout(() => {
            this.renderImages(imgs)
            this.setState({
                ImgMap: this.state.ImgMap.concat([imgs.shift()])
            })
        }, 100);
    }
    componentDidMount() {
        this.renderImages(this.images)
    }
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        const settings = {
            className:'portfolio-slider',
            dots: false,
            adaptiveHeight:true,
            arrows:false,
            slidesToShow: 5,
            autoplay:false,
            rows: 4,

            responsive: [
                {
                    breakpoint: 756,
                    settings: {
                        slidesToShow: 4,
                        autoplay:false,
                        rows: 5,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        autoplay:false,
                        rows: 7,

                    }
                },
                {
                    breakpoint: 456,
                    settings: {
                        slidesToShow: 2,
                        autoplay:false,
                        rows: 11,

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
                        <div className="col-md-10 col-lg-12 col-xs-12">
<div className={'row'}>

    {this.state.ImgMap.map((im,i)=>{return <div className={'pt-2 pb-2 col-6 col-md-4 col-lg-3'}><AnimatedTeg key={i} value={<div ><img onClick={this.handleOpenModal} className="img-fluid sm-border-black img-portfolio" src={im} /></div>}/></div>})
        }

</div>
                            <ReactModal
                                className={'photo-modal'}
                                isOpen={this.state.showModal}
                                contentLabel="onRequestClose Example"
                                onRequestClose={this.handleCloseModal}
                            >
                                <img src={Img1_1} className={'opened-image'}/>
                            </ReactModal>
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
