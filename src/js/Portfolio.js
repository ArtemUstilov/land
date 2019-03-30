import React, {Component} from 'react';
import '../styles/Portfolio.css'
import '../styles/settings.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedTeg from './Animated'
import Img1_1 from '../img/portfolio/1/1.jpg';
import Img1_2 from '../img/portfolio/1/2.jpg';
import Img1_3 from '../img/portfolio/1/3.jpg';
import Img1_4 from '../img/portfolio/1/4.jpg';
import Img1_5 from '../img/portfolio/1/5.jpg';
import Img1_6 from '../img/portfolio/1/6.jpg';
import Img1_7 from '../img/portfolio/1/7.jpg';
import Img2_1 from '../img/portfolio/2/1.jpg';
import Img2_2 from '../img/portfolio/2/2.jpg';
import Img2_3 from '../img/portfolio/2/3.jpg';
import Img2_4 from '../img/portfolio/2/4.jpg';
import Img2_5 from '../img/portfolio/2/5.jpg';
import Img2_6 from '../img/portfolio/2/6.jpg';
import Img2_7 from '../img/portfolio/2/7.jpg';
import Img2_8 from '../img/portfolio/2/8.jpg';
import Img2_9 from '../img/portfolio/2/9.jpg';
import Img2_10 from '../img/portfolio/2/10.jpg';
import Img2_11 from '../img/portfolio/2/11.jpg';
import Img2_12 from '../img/portfolio/2/12.jpg';
import Img2_13 from '../img/portfolio/2/13.jpg';
import Img2_14 from '../img/portfolio/2/14.jpg';
import Img2_15 from '../img/portfolio/2/15.jpg';
import Img2_16 from '../img/portfolio/2/16.jpg';
import Img2_17 from '../img/portfolio/2/17.jpg';
import Img2_18 from '../img/portfolio/2/18.jpg';
import Img2_21 from '../img/portfolio/2/21.jpg';
import Img2_22 from '../img/portfolio/2/22.jpg';
import Img2_23 from '../img/portfolio/2/23.jpg';
import Img3_1 from '../img/portfolio/3/1.jpg';
import Img3_2 from '../img/portfolio/3/2.jpg';
import Img3_3 from '../img/portfolio/3/3.jpg';
import Img3_4 from '../img/portfolio/3/4.jpg';
import Img3_5 from '../img/portfolio/3/5.jpg';
import Img3_6 from '../img/portfolio/3/6.jpg';
import Img3_7 from '../img/portfolio/3/7.jpg';
import Img3_8 from '../img/portfolio/3/8.jpg';
import Img3_9 from '../img/portfolio/3/9.jpg';
import Img3_10 from '../img/portfolio/3/10.jpg';
import Img3_11 from '../img/portfolio/3/11.jpg';
import Img3_12 from '../img/portfolio/3/12.jpg';
import Img3_13 from '../img/portfolio/3/13.jpg';
import Img3_14 from '../img/portfolio/3/14.jpg';
import Img3_15 from '../img/portfolio/3/15.jpg';
import Img4_1 from '../img/portfolio/4/1.jpg';
import Img4_2 from '../img/portfolio/4/2.jpg';
import Img4_3 from '../img/portfolio/4/3.jpg';
import Img4_4 from '../img/portfolio/4/4.jpg';
import Img4_5 from '../img/portfolio/4/5.jpg';
import Img4_6 from '../img/portfolio/4/6.jpg';
import Img5_1 from '../img/portfolio/5/1.jpg';
import Img5_2 from '../img/portfolio/5/2.jpg';
import Img5_3 from '../img/portfolio/5/3.jpg';
import Img5_4 from '../img/portfolio/5/4.jpg';
import Img5_5 from '../img/portfolio/5/5.jpg';
import Img5_6 from '../img/portfolio/5/6.jpg';
import Img5_7 from '../img/portfolio/5/7.jpg';
import Img5_8 from '../img/portfolio/5/8.jpg';
import Img5_9 from '../img/portfolio/5/9.jpg';
import Img5_10 from '../img/portfolio/5/10.jpg';
import Img5_11 from '../img/portfolio/5/11.jpg';
import Img5_12 from '../img/portfolio/5/12.jpg';
import Img5_13 from '../img/portfolio/5/13.jpg';
import Img5_14 from '../img/portfolio/5/14.jpg';
import Img5_15 from '../img/portfolio/5/15.jpg';
import Img5_16 from '../img/portfolio/5/16.jpg';
import Img5_17 from '../img/portfolio/5/17.jpg';
import Img5_18 from '../img/portfolio/5/18.jpg';
import Img5_19 from '../img/portfolio/5/19.jpg';
import Img5_20 from '../img/portfolio/5/20.jpg';
import Img5_21 from '../img/portfolio/5/21.jpg';
import Img5_22 from '../img/portfolio/5/22.jpg';
import Img5_23 from '../img/portfolio/5/23.jpg';
import Img7_1 from '../img/portfolio/7/1.jpg';
import Img7_2 from '../img/portfolio/7/2.jpg';
import Img7_3 from '../img/portfolio/7/3.jpg';
import Img7_4 from '../img/portfolio/7/4.jpg';
import Img7_5 from '../img/portfolio/7/5.jpg';
import Img7_6 from '../img/portfolio/7/6.jpg';
import Img7_7 from '../img/portfolio/7/7.jpg';
import Img7_8 from '../img/portfolio/7/8.jpg';
import Img7_9 from '../img/portfolio/7/9.jpg';
import Img7_10 from '../img/portfolio/7/10.jpg';
import Img7_11 from '../img/portfolio/7/11.jpg';
import Img7_12 from '../img/portfolio/7/12.jpg';
import Img7_15 from '../img/portfolio/7/15.jpg';
import Img6_1 from '../img/portfolio/6/1.jpg';
import Img6_2 from '../img/portfolio/6/2.jpg';
import Img6_3 from '../img/portfolio/6/3.jpg';
import Img6_4 from '../img/portfolio/6/4.jpg';
import Img6_5 from '../img/portfolio/6/5.jpg';
import Img6_7 from '../img/portfolio/6/7.jpg';
import Img6_8 from '../img/portfolio/6/8.jpg';
import Img6_9 from '../img/portfolio/6/9.jpg';
import Img6_10 from '../img/portfolio/6/10.jpg';
import Img6_11 from '../img/portfolio/6/11.jpg';
import Img6_12 from '../img/portfolio/6/12.jpg';
import Img6_15 from '../img/portfolio/6/15.jpg';
import Img8_1 from '../img/portfolio/8/1.jpg';
import Img8_2 from '../img/portfolio/8/2.jpg';
import Img8_3 from '../img/portfolio/8/3.jpg';
import Img8_4 from '../img/portfolio/8/4.jpg';
import Img8_5 from '../img/portfolio/8/5.jpg';
import Img8_6 from '../img/portfolio/8/6.jpg';
import Img8_7 from '../img/portfolio/8/7.jpg';
import Img8_8 from '../img/portfolio/8/8.jpg';
import Img8_9 from '../img/portfolio/8/9.jpg';
import Img9_1 from '../img/portfolio/9/1.jpg';
import Img9_2 from '../img/portfolio/9/2.jpg';
import Img9_3 from '../img/portfolio/9/3.jpg';
import Img9_4 from '../img/portfolio/9/4.jpg';
import Img9_5 from '../img/portfolio/9/5.jpg';
import Img9_6 from '../img/portfolio/9/6.jpg';
import Img9_7 from '../img/portfolio/9/7.jpg';
import Img9_8 from '../img/portfolio/9/8.jpg';
import Img9_9 from '../img/portfolio/9/9.jpg';
import Img9_10 from '../img/portfolio/9/10.jpg';
import Img9_11 from '../img/portfolio/9/11.jpg';
import Img9_12 from '../img/portfolio/9/12.jpg';
import Img9_13 from '../img/portfolio/9/13.jpg';
import Img10_2 from '../img/portfolio/10/2.jpg';
import Img10_3 from '../img/portfolio/10/3.jpg';
import Img10_4 from '../img/portfolio/10/4.jpg';
import Img10_5 from '../img/portfolio/10/5.jpg';
import Img10_6 from '../img/portfolio/10/6.jpg';
import Img10_7 from '../img/portfolio/10/7.jpg';
import Img10_8 from '../img/portfolio/10/8.jpg';
import Img10_9 from '../img/portfolio/10/9.jpg';
import Img10_10 from '../img/portfolio/10/10.jpg';
import Img11_1 from '../img/portfolio/11/1.jpg';
import Img11_2 from '../img/portfolio/11/2.jpg';
import Img11_3 from '../img/portfolio/11/3.jpg';
import Img11_4 from '../img/portfolio/11/4.jpg';
import Img11_5 from '../img/portfolio/11/5.jpg';
import Img11_6 from '../img/portfolio/11/6.jpg';
import Img11_7 from '../img/portfolio/11/7.jpg';
import Img11_8 from '../img/portfolio/11/8.jpg';
import Img11_9 from '../img/portfolio/11/9.jpg';
import Img11_10 from '../img/portfolio/11/10.jpg';
import Img11_11 from '../img/portfolio/11/11.jpg';
import Img11_12 from '../img/portfolio/11/12.jpg';
import Img12_1 from '../img/portfolio/12/1.jpg';
import Img12_2 from '../img/portfolio/12/2.jpg';
import Img12_3 from '../img/portfolio/12/3.jpg';
import Img12_4 from '../img/portfolio/12/4.jpg';
import Img12_5 from '../img/portfolio/12/5.jpg';
import Img12_6 from '../img/portfolio/12/6.jpg';
import Img12_7 from '../img/portfolio/12/7.jpg';
import Img12_8 from '../img/portfolio/12/8.jpg';
import Img12_9 from '../img/portfolio/12/9.jpg';
import Img12_10 from '../img/portfolio/12/10.jpg';
import Img12_11 from '../img/portfolio/12/11.jpg';
import Img12_12 from '../img/portfolio/12/12.jpg';
import Img13_1 from '../img/portfolio/13/1.jpg';
import Img13_2 from '../img/portfolio/13/2.jpg';
import Img13_3 from '../img/portfolio/13/3.jpg';
import Img13_4 from '../img/portfolio/13/4.jpg';
import Img13_5 from '../img/portfolio/13/5.jpg';
import Img13_6 from '../img/portfolio/13/6.jpg';
import Img13_7 from '../img/portfolio/13/7.jpg';
import Img13_8 from '../img/portfolio/13/8.jpg';
import Img13_9 from '../img/portfolio/13/9.jpg';
import Img13_10 from '../img/portfolio/13/10.jpg';
import Img13_11 from '../img/portfolio/13/11.jpg';
import Img13_12 from '../img/portfolio/13/12.jpg';
import Img13_13 from '../img/portfolio/13/13.jpg';
import Img14_1 from '../img/portfolio/14/1.jpg';
import Img14_2 from '../img/portfolio/14/2.jpg';
import Img14_3 from '../img/portfolio/14/3.jpg';
import Img14_4 from '../img/portfolio/14/4.jpg';
import Img14_5 from '../img/portfolio/14/5.jpg';
import Img14_6 from '../img/portfolio/14/6.jpg';
import Img14_7 from '../img/portfolio/14/7.jpg';
import Img14_8 from '../img/portfolio/14/8.jpg';
import Img14_9 from '../img/portfolio/14/9.jpg';
import Img14_10 from '../img/portfolio/14/10.jpg';
import Img14_11 from '../img/portfolio/14/11.jpg';
import Img14_12 from '../img/portfolio/14/12.jpg';
import Img14_13 from '../img/portfolio/14/11.jpg';
import Img14_14 from '../img/portfolio/14/12.jpg';
import Img14_15 from '../img/portfolio/14/12.jpg';
import Img14_16 from '../img/portfolio/14/11.jpg';
import Img14_17 from '../img/portfolio/14/12.jpg';
import Img15_1 from '../img/portfolio/15/1.jpg';
import Img15_2 from '../img/portfolio/15/2.jpg';
import Img15_3 from '../img/portfolio/15/3.jpg';
import Img16_1 from '../img/portfolio/16/1.jpg';
import Img16_2 from '../img/portfolio/16/2.jpg';
import Img16_3 from '../img/portfolio/16/3.jpg';
import Img16_4 from '../img/portfolio/16/4.jpg';
import Img16_5 from '../img/portfolio/16/5.jpg';
import Img16_6 from '../img/portfolio/16/6.jpg';
import Img16_7 from '../img/portfolio/16/7.jpg';
import Img16_8 from '../img/portfolio/16/8.jpg';
import Img17_1 from '../img/portfolio/17/1.jpg';
import Img17_2 from '../img/portfolio/17/2.jpg';
import Img17_3 from '../img/portfolio/17/3.jpg';
import Img17_4 from '../img/portfolio/17/4.jpg';
import Img17_5 from '../img/portfolio/17/5.jpg';
import Img17_6 from '../img/portfolio/17/6.jpg';
import Img17_7 from '../img/portfolio/17/7.jpg';
import Img17_8 from '../img/portfolio/17/8.jpg';

import ScrollAnimation from 'react-animate-on-scroll';
import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/portfolio.json'
import {Translate, withLocalize} from 'react-localize-redux'
import ReactModal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


ReactModal.setAppElement(document.getElementById("root"));

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.images = [Img1_1, Img2_1, Img3_1, Img4_1, Img5_1, Img6_1, Img7_1, Img8_1, Img9_1, Img10_3,
            Img11_1, Img12_1, Img13_1, Img14_1, Img15_1, Img16_1, Img17_1];

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

        this.images13 = [Img13_2, Img13_3, Img13_4, Img13_5, Img13_6, Img13_7, Img13_8, Img13_9, Img13_10,
            Img13_11, Img13_12, Img13_13];
        this.imagesList13 = this.images13.map(img => ({original: img, thumbnail: img}))

        this.images14 = [Img14_2, Img14_3, Img14_4, Img14_5, Img14_6, Img14_7, Img14_8, Img14_9, Img14_10,
            Img14_11, Img14_12, Img14_13, Img14_14, Img14_15, Img14_16, Img14_17] ;
        this.imagesList14 = this.images14.map(img => ({original: img, thumbnail: img}))

        this.images15 = [Img15_2, Img15_3] ;
        this.imagesList15 = this.images15.map(img => ({original: img, thumbnail: img}))

        this.images16 = [Img16_2, Img16_3, Img16_4, Img16_5, Img16_6, Img16_7, Img16_8] ;
        this.imagesList16 = this.images16.map(img => ({original: img, thumbnail: img}))

        this.images17 = [Img17_2, Img17_3, Img17_4, Img17_5, Img17_6, Img17_7, Img17_8] ;
        this.imagesList17 = this.images17.map(img => ({original: img, thumbnail: img}))

        this.imagesLists = [this.imagesList1, this.imagesList2, this.imagesList3, this.imagesList4,
            this.imagesList5, this.imagesList6, this.imagesList7, this.imagesList8, this.imagesList9,
            this.imagesList10, this.imagesList11, this.imagesList12, this.imagesList13, this.imagesList14,
            this.imagesList15, this.imagesList16, this.imagesList17 ]
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
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
            <h3 className="text-center about-logo title">
            <Translate id='portfolio.title'/>
            </h3>
            </ScrollAnimation>
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
                <div className={'portfolio-box-title'}><h5><Translate id={`port.projNames.${i+1}`} /></h5>
                    <h6><Translate id={`port.projPlaces.${i+1}`} /></h6></div>
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
