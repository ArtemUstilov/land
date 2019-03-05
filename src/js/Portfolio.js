import React, {Component} from 'react';
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
import Img1_7 from '../img/portfolio/first/7.jpg';
import Img2_1 from '../img/portfolio/second/1.jpg';
import Img2_2 from '../img/portfolio/second/2.jpg';
import Img2_3 from '../img/portfolio/second/3.jpg';
import Img2_4 from '../img/portfolio/second/4.jpg';
import Img2_5 from '../img/portfolio/second/5.jpg';
import Img2_6 from '../img/portfolio/second/6.jpg';
import Img2_7 from '../img/portfolio/second/7.jpg';
import Img2_8 from '../img/portfolio/second/8.jpg';
import Img2_9 from '../img/portfolio/second/9.jpg';
import Img2_10 from '../img/portfolio/second/10.jpg';
import Img2_11 from '../img/portfolio/second/11.jpg';
import Img2_12 from '../img/portfolio/second/12.jpg';
import Img2_13 from '../img/portfolio/second/13.jpg';
import Img2_14 from '../img/portfolio/second/14.jpg';
import Img2_15 from '../img/portfolio/second/15.jpg';
import Img2_16 from '../img/portfolio/second/16.jpg';
import Img2_17 from '../img/portfolio/second/17.jpg';
import Img2_18 from '../img/portfolio/second/18.jpg';
import Img2_21 from '../img/portfolio/second/21.jpg';
import Img2_22 from '../img/portfolio/second/22.jpg';
import Img2_23 from '../img/portfolio/second/23.jpg';
import Img3_1 from '../img/portfolio/third/1.jpg';
import Img3_2 from '../img/portfolio/third/2.jpg';
import Img3_3 from '../img/portfolio/third/3.jpg';
import Img3_4 from '../img/portfolio/third/4.jpg';
import Img3_5 from '../img/portfolio/third/5.jpg';
import Img3_6 from '../img/portfolio/third/6.jpg';
import Img3_7 from '../img/portfolio/third/7.jpg';
import Img3_8 from '../img/portfolio/third/8.jpg';
import Img3_9 from '../img/portfolio/third/9.jpg';
import Img3_10 from '../img/portfolio/third/10.jpg';
import Img3_11 from '../img/portfolio/third/11.jpg';
import Img3_12 from '../img/portfolio/third/12.jpg';
import Img3_13 from '../img/portfolio/third/13.jpg';
import Img3_14 from '../img/portfolio/third/14.jpg';
import Img3_15 from '../img/portfolio/third/15.jpg';
import Img4_1 from '../img/portfolio/fourth/1.jpg';
import Img4_2 from '../img/portfolio/fourth/2.jpg';
import Img4_3 from '../img/portfolio/fourth/3.jpg';
import Img4_4 from '../img/portfolio/fourth/4.jpg';
import Img4_5 from '../img/portfolio/fourth/5.jpg';
import Img4_6 from '../img/portfolio/fourth/6.jpg';
import Img5_1 from '../img/portfolio/fifth/1.jpg';
import Img5_2 from '../img/portfolio/fifth/2.jpg';
import Img5_3 from '../img/portfolio/fifth/3.jpg';
import Img5_4 from '../img/portfolio/fifth/4.jpg';
import Img5_5 from '../img/portfolio/fifth/5.jpg';
import Img5_6 from '../img/portfolio/fifth/6.jpg';
import Img5_7 from '../img/portfolio/fifth/7.jpg';
import Img5_8 from '../img/portfolio/fifth/8.jpg';
import Img5_9 from '../img/portfolio/fifth/9.jpg';
import Img5_10 from '../img/portfolio/fifth/10.jpg';
import Img5_11 from '../img/portfolio/fifth/11.jpg';
import Img5_12 from '../img/portfolio/fifth/12.jpg';
import Img5_13 from '../img/portfolio/fifth/13.jpg';
import Img5_14 from '../img/portfolio/fifth/14.jpg';
import Img5_15 from '../img/portfolio/fifth/15.jpg';
import Img5_16 from '../img/portfolio/fifth/16.jpg';
import Img5_17 from '../img/portfolio/fifth/17.jpg';
import Img5_18 from '../img/portfolio/fifth/18.jpg';
import Img5_19 from '../img/portfolio/fifth/19.jpg';
import Img5_20 from '../img/portfolio/fifth/20.jpg';
import Img5_21 from '../img/portfolio/fifth/21.jpg';
import Img5_22 from '../img/portfolio/fifth/22.jpg';
import Img5_23 from '../img/portfolio/fifth/23.jpg';
import Img7_1 from '../img/portfolio/seventh/1.jpg';
import Img7_2 from '../img/portfolio/seventh/2.jpg';
import Img7_3 from '../img/portfolio/seventh/3.jpg';
import Img7_4 from '../img/portfolio/seventh/4.jpg';
import Img7_5 from '../img/portfolio/seventh/5.jpg';
import Img7_6 from '../img/portfolio/seventh/6.jpg';
import Img7_7 from '../img/portfolio/seventh/7.jpg';
import Img7_8 from '../img/portfolio/seventh/8.jpg';
import Img7_9 from '../img/portfolio/seventh/9.jpg';
import Img7_10 from '../img/portfolio/seventh/10.jpg';
import Img7_11 from '../img/portfolio/seventh/11.jpg';
import Img7_12 from '../img/portfolio/seventh/12.jpg';
import Img7_15 from '../img/portfolio/seventh/15.jpg';
import Img6_1 from '../img/portfolio/sixth/1.jpg';
import Img6_2 from '../img/portfolio/sixth/2.jpg';
import Img6_3 from '../img/portfolio/sixth/3.jpg';
import Img6_4 from '../img/portfolio/sixth/4.jpg';
import Img6_5 from '../img/portfolio/sixth/5.jpg';
import Img6_7 from '../img/portfolio/sixth/7.jpg';
import Img6_8 from '../img/portfolio/sixth/8.jpg';
import Img6_9 from '../img/portfolio/sixth/9.jpg';
import Img6_10 from '../img/portfolio/sixth/10.jpg';
import Img6_11 from '../img/portfolio/sixth/11.jpg';
import Img6_12 from '../img/portfolio/sixth/12.jpg';
import Img6_15 from '../img/portfolio/sixth/15.jpg';
import Img8_1 from '../img/portfolio/eight/1.jpg';
import Img8_2 from '../img/portfolio/eight/2.jpg';
import Img8_3 from '../img/portfolio/eight/3.jpg';
import Img8_4 from '../img/portfolio/eight/4.jpg';
import Img8_5 from '../img/portfolio/eight/5.jpg';
import Img8_6 from '../img/portfolio/eight/6.jpg';
import Img8_7 from '../img/portfolio/eight/7.jpg';
import Img8_8 from '../img/portfolio/eight/8.jpg';
import Img8_9 from '../img/portfolio/eight/9.jpg';
import Img9_1 from '../img/portfolio/ninth/1.jpg';
import Img9_2 from '../img/portfolio/ninth/2.jpg';
import Img9_3 from '../img/portfolio/ninth/3.jpg';
import Img9_4 from '../img/portfolio/ninth/4.jpg';
import Img9_5 from '../img/portfolio/ninth/5.jpg';
import Img9_6 from '../img/portfolio/ninth/6.jpg';
import Img9_7 from '../img/portfolio/ninth/7.jpg';
import Img9_8 from '../img/portfolio/ninth/8.jpg';
import Img9_9 from '../img/portfolio/ninth/9.jpg';
import Img9_10 from '../img/portfolio/ninth/10.jpg';
import Img9_11 from '../img/portfolio/ninth/11.jpg';
import Img9_12 from '../img/portfolio/ninth/12.jpg';
import Img9_13 from '../img/portfolio/ninth/13.jpg';
import Img10_2 from '../img/portfolio/tenth/2.jpg';
import Img10_3 from '../img/portfolio/tenth/3.jpg';
import Img10_4 from '../img/portfolio/tenth/4.jpg';
import Img10_5 from '../img/portfolio/tenth/5.jpg';
import Img10_6 from '../img/portfolio/tenth/6.jpg';
import Img10_7 from '../img/portfolio/tenth/7.jpg';
import Img10_8 from '../img/portfolio/tenth/8.jpg';
import Img10_9 from '../img/portfolio/tenth/9.jpg';
import Img10_10 from '../img/portfolio/tenth/10.jpg';
import Img11_1 from '../img/portfolio/eleventh/1.jpg';
import Img11_2 from '../img/portfolio/eleventh/2.jpg';
import Img11_3 from '../img/portfolio/eleventh/3.jpg';
import Img11_4 from '../img/portfolio/eleventh/4.jpg';
import Img11_5 from '../img/portfolio/eleventh/5.jpg';
import Img11_6 from '../img/portfolio/eleventh/6.jpg';
import Img11_7 from '../img/portfolio/eleventh/7.jpg';
import Img11_8 from '../img/portfolio/eleventh/8.jpg';
import Img11_9 from '../img/portfolio/eleventh/9.jpg';
import Img11_10 from '../img/portfolio/eleventh/10.jpg';
import Img11_11 from '../img/portfolio/eleventh/11.jpg';
import Img11_12 from '../img/portfolio/eleventh/12.jpg';
import Img12_1 from '../img/portfolio/twelvth/1.jpg';
import Img12_2 from '../img/portfolio/twelvth/2.jpg';
import Img12_3 from '../img/portfolio/twelvth/3.jpg';
import Img12_4 from '../img/portfolio/twelvth/4.jpg';
import Img12_5 from '../img/portfolio/twelvth/5.jpg';
import Img12_6 from '../img/portfolio/twelvth/6.jpg';
import Img12_7 from '../img/portfolio/twelvth/7.jpg';
import Img12_8 from '../img/portfolio/twelvth/8.jpg';
import Img12_9 from '../img/portfolio/twelvth/9.jpg';
import Img12_10 from '../img/portfolio/twelvth/10.jpg';
import Img12_11 from '../img/portfolio/twelvth/11.jpg';
import Img12_12 from '../img/portfolio/twelvth/12.jpg';


import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/main.json'
import {withLocalize} from 'react-localize-redux'
import ReactModal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


ReactModal.setAppElement(document.getElementById("root"));

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
        this.images = [Img1_1, Img2_1, Img3_1, Img4_1, Img5_1, Img6_1, Img7_1, Img8_1, Img9_1, Img10_3,
            Img11_1, Img12_1];

        this.imagesList1 = [
            {
                original: Img1_2,
                thumbnail: Img1_2,
            },
            {
                original: Img1_3,
                thumbnail: Img1_3
            },
            {
                original: Img1_4,
                thumbnail: Img1_4
            },
            {
                original: Img1_5,
                thumbnail: Img1_5
            },
            {
                original: Img1_6,
                thumbnail: Img1_6
            },
            {
                original: Img1_7,
                thumbnail: Img1_7
            }
        ]
        this.imagesList2 = [];
        this.images2 = [Img2_2, Img2_3, Img2_4, Img2_5, Img2_6, Img2_7, Img2_8, Img2_9,
            Img2_10, Img2_11, Img2_12, Img2_13,
            Img2_14, Img2_15, Img2_16, Img2_17, Img2_18, Img2_21,Img2_22,Img2_23];
        this.images2.map((x, i) => this.imagesList2.push({
            original: this.images2[i],
            thumbnail: this.images2[i]

        }))
        this.images3 = [Img3_2, Img3_3, Img3_4, Img3_5, Img3_6, Img3_7, Img3_8, Img3_9,
            Img3_10, Img3_11, Img3_12, Img3_13, Img3_14, Img3_15];

        this.imagesList3 = this.images3.map(img => ({original: img, thumbnail: img}))
        this.imagesList4 = [
            {
                original: Img4_2,
                thumbnail: Img4_2,
            },
            {
                original: Img4_3,
                thumbnail: Img4_3
            },
            {
                original: Img4_4,
                thumbnail: Img4_4
            },
            {
                original: Img4_5,
                thumbnail: Img4_5
            },
            {
                original: Img4_6,
                thumbnail: Img4_6
            }
        ]
        this.imagesList5 = [];
        this.images5 = [Img5_2, Img5_3, Img5_4, Img5_5, Img5_6, Img5_7, Img5_8, Img5_9,
            Img5_10, Img5_11, Img5_12, Img5_13,
            Img5_14, Img5_15, Img5_16, Img5_17, Img5_18,
            Img5_19, Img5_20, Img5_21, Img5_22, Img5_23];
        this.images5.map((x, i) => this.imagesList5.push({
            original: this.images5[i],
            thumbnail: this.images5[i]

        }))
        this.imagesList6 = [];
        this.images6 = [Img6_2, Img6_3, Img6_4, Img6_5, Img6_7, Img6_8, Img6_9,
            Img6_10, Img6_11, Img6_12, Img6_15];
        this.images6.map((x, i) => this.imagesList6.push({
            original: this.images6[i],
            thumbnail: this.images6[i]

        }))
        this.images7 = [Img7_2, Img7_3, Img7_4, Img7_5, Img7_6, Img7_7, Img7_8, Img7_9,
            Img7_10, Img7_11, Img7_12, Img7_15];
        this.imagesList7 = this.images7.map(img => ({original: img, thumbnail: img}))

        this.images8 = [Img8_2, Img8_3, Img8_4, Img8_5, Img8_6, Img8_7, Img8_8, Img8_9];
        this.imagesList8 = this.images8.map(img => ({original: img, thumbnail: img}))

        this.images9 = [Img9_2, Img9_3, Img9_4, Img9_5, Img9_6, Img9_7, Img9_8, Img9_9, Img9_10, Img9_11, Img9_12,
            Img9_13];
        this.imagesList9 = this.images9.map(img => ({original: img, thumbnail: img}))

        this.images10 = [Img10_2, Img10_4, Img10_5, Img10_6, Img10_7, Img10_8, Img10_9, Img10_10];
        this.imagesList10 = this.images10.map(img => ({original: img, thumbnail: img}))

        this.images11 = [Img11_2, Img11_3, Img11_4, Img11_5, Img11_6, Img11_7, Img11_8, Img11_9, Img11_10,
            Img11_11, Img11_12];
        this.imagesList11 = this.images11.map(img => ({original: img, thumbnail: img}))

        this.images12 = [Img12_2, Img12_3, Img12_4, Img12_5, Img12_6, Img12_7, Img12_8, Img12_9, Img12_10,
            Img12_11, Img12_12];
        this.imagesList12 = this.images12.map(img => ({original: img, thumbnail: img}))

        this.imagesLists = [this.imagesList1, this.imagesList2, this.imagesList3, this.imagesList4,
            this.imagesList5, this.imagesList6, this.imagesList7, this.imagesList8, this.imagesList9,
            this.imagesList10, this.imagesList11, this.imagesList12]
        this.state = {
            ImgMap: [],
            showModal: false,
            photoToShow: [],
        }
        this.props.addTranslation(contactsTranslations);
        this.renderImages = this.renderImages.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    renderImages(imgs) {

        if (!imgs.length)
            return;
        setTimeout(() => {
            this.renderImages(imgs)
            this.setState({
                ImgMap: this.state.ImgMap.concat([imgs.shift()])
            })
        }, 150);
    }

    componentDidMount() {
       window.scrollTo({top: 0, behavior: "smooth"});
        this.renderImages(this.images)
    }

    handleOpenModal(i) {
        this.setState({
            photoToShow: this.imagesLists[i]
        })
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        const settings = {
            className: 'portfolio-slider',
            dots: false,
            adaptiveHeight: true,
            arrows: false,
            slidesToShow: 5,
            autoplay: false,
            rows: 4,

            responsive: [
                {
                    breakpoint: 756,
                    settings: {
                        slidesToShow: 4,
                        autoplay: false,
                        rows: 5,

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        autoplay: false,
                        rows: 7,

                    }
                },
                {
                    breakpoint: 456,
                    settings: {
                        slidesToShow: 2,
                        autoplay: false,
                        rows: 11,

                    }
                }

            ]
        };
        const titles = [['Дом (зона гостиная - столовая)', 'г.Полонное'],
            ['Квартира для молодой семьи', 'р-н Выставка  г.Хмельницкий'],
            ['Дом', 'сгт. Головчинцы , Хмельницкая область'],
            ['Квартира для молодой мамы и сына', 'Жк.Агора, г.Хмельницкий'],
            ['Дом в классическом стиле', 'р-н Ружычная , г.Хмельницкий'],
            ['Квартира в стиле Прованс', 'ул.Институтская , г. Хмельницкий'],
            ['Коттедж', 'мкр-н Ранковый , г.Хмельницкий'],
            ['Квартира для холостяка', 'ул.Институтская , г.Хмельницкий'],
            ['Салон красоты Bona Vita', ' г.Хмельницкий'],
            ['Квартира в стиле Нео-классика ', 'г.Львов'],
            ['Квартира для молодой семьи в классическом стиле', 'Жк.Paradise  г.Хмельницкий'],
            ['Квартира для молодой семьи', ' г.Черновцы']]
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

                                {this.state.ImgMap.map((im, i) => {
                                    if (im == undefined) return;
                                    return <div key={i} className={'pt-2 pb-2 col-12 col-md-6 col-xl-4'}><AnimatedTeg
                                        value={
                                            <div className={'img-portfolio-box-rec'}
                                                 onClick={() => this.handleOpenModal(i)}>

                                                <div className={'img-portfolio-box'} style={{
                                                    background: `url(${im}) center`,
                                                    backgroundSize: '100% 100%'
                                                }} onClick={() => this.handleOpenModal(i)}>
                                                    <div className={'portfolio-box-title'}><h5>{titles[i][0]}</h5>
                                                        <h6>{titles[i][1]}</h6></div>
                                                </div>
                                            </div>}/>
                                    </div>
                                })
                                }

                            </div>
                            <ReactModal
                                className={'gallery-modal'}
                                isOpen={this.state.showModal}
                                contentLabel="onRequestClose Example"
                                onRequestClose={this.handleCloseModal}
                            >
                                <ImageGallery showPlayButton={false} showBullets={true} showIndex={true}
                                              items={this.state.photoToShow}/>
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
