import React, {Component} from 'react';
import '../styles/mainPage.css'
import '../styles/settings.css'
import Button from './Button'
import logo from '../img/bg.jpg'
import contactsTranslations from '../translations/main.json'
import design1 from '../img/design1.jpg'
import design3 from '../img/design3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withLocalize} from 'react-localize-redux'
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
import makaka from '../img/unicorn.jpg'
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

class Describe extends Component {
    render() {
        return (<div className={`box box${this.props.num % 2}`}>
                <img src={this.props.icon} alt="" className="box-icon"/>
                <h5 className="box-title">ШАГ {this.props.num}</h5>
                <p className='box-text'>{this.props.text}</p>
            </div>
        )
    }
}
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
        return (


            <Slider className={'text-center footer-slider'} {...settings}>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img00} />
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img01}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img02}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img03}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img04}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img05}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img06}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img07}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img08}/>
                    </a>
                </div>
                <div>
                    <a href={'https://www.instagram.com/okolitadesign/'}>
                        <img className="img-fluid" src={Img09}/>
                    </a>
                </div>



            </Slider>

        );
    }
}
class Member extends Component {
    render() {
        return (<div className='d-flex flex-column justify-content-start align-items-center'>
                <div className='upper-block'/>
                <img src={this.props.icon} alt="" className="img-fluid"/>
                <div className='lower-block d-flex flex-column justify-content-center align-items-center'>
                    <p className="mem-name">{this.props.name}</p>
                    <p className='mem-position'>{this.props.position}</p>
                </div>
            </div>
        )
    }
}

class Design extends Component {
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
        let no_pad = {
            padding: '5px'
        }
        // let wrapper = document.getElementById("wrapper");
        // let text = document.getElementById('text')
        // if(text) {
        //     const textCont = text.textContent;
        //     text.style.display = "none";
        //
        //     for (let i = 0; i < textCont.length; i++) {
        //         (function (i) {
        //             setTimeout(function () {
        //                 const texts = document.createTextNode(textCont[i]);
        //                 const span = document.createElement('span');
        //                 span.appendChild(texts);
        //                 span.classList.add("wave");
        //                 wrapper.appendChild(span);
        //
        //             }, 30*i);
        //         }(i));
        //     }
        // }
        let imgs = [Img1_1, Img1_5, Img2_1, Img2_5, Img3_5, Img4_6];
        return <div className="design">
            <section id={'section1'} className={'section'}>
                <div className="title-box ps-top-to-bottom">
                    <h1 className='white-text title1'>ДИЗАЙН ИНТЕРЬЕРА</h1>
                    <div id='wrapper'>
                    <p className='white-text' id='text'>Сделам Ваш интерьер стильным и уютным</p>
                    </div>
                    <Button white={true} value="des.btn" classes={'title-btn'}/>
                </div>
            </section>
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className={'title'}>Наши работы</h1>
                            <div className={'proj-box'}>
                                {[1, 2].map(x =>
                                    <div key={x} className="row">
                                        {[1, 2, 3].map(x =>
                                            <div key={x} className="col-sm-4 greeny" style={no_pad}>
                                                <img src={imgs.pop()} alt="" className={'proj-img'}/>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <Button white={false} value="СМОТРЕТЬ ВСЕ РАБОТЫ" classes='proj-btn'/>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section id={'section3'} className={'section'}>*/}
            {/*<div className="title-box ps-top-to-bottom">*/}
            {/*<h1 className='white-text title white-title' style={{padding: '10px'}}>С чего начать*/}
            {/*дизайн?</h1>*/}
            {/*<p className='white-text'>Запишитесь на консультацию дизайнера</p>*/}
            {/*<Button white={true} value="ЗАПИСАТЬСЯ СЕЙЧАС" classes='proj-btn'/>*/}
            {/*</div>*/}
            {/*</section>*/}

            {/*<section id={'section6'} className={'section'}>*/}
            {/*<h1 className='title'>Ход работы</h1>*/}
            {/*<div className="work-box float1">*/}
            {/*<Describe num='1'*/}
            {/*text='5 серпня 2004 року у Венесуелі відбувся референдум щодо можливої*/}
            {/*дострокової відставки глави держави Уго Чавеса. 17 серпня стало відомо,*/}
            {/*що США відмовилися визнавати результати референдуму й закликали розпочати'*/}
            {/*icon={logo}/>*/}
            {/*<img src={logo} alt='' className="box-behind"/>*/}
            {/*</div>*/}
            {/*<div className="work-box float0">*/}
            {/*<Describe num='2'*/}
            {/*text="2 березня 2006 року одностайним рішенням Національних зборів (парламенту)*/}
            {/*Венесуели були ухвалені зміни в державній символіці, запропоновані президентом країни"*/}
            {/*icon={logo}/>*/}
            {/*<img src={logo} alt='' className="box-behind"/>*/}
            {/*</div>*/}
            {/*<div className="work-box float1">*/}
            {/*<Describe num='3'*/}
            {/*text="Президент Венесуели Уго Чавес, представляючи нову символіку, назвав своє нововведення*/}
            {/*«зіркою Болівара»"*/}
            {/*icon={logo}/>*/}
            {/*<img src={logo} alt='' className="box-behind"/>*/}
            {/*</div>*/}
            {/*</section>*/}
            <section id='section7'>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12">
                            <h1 className='white-text white-title title' style={{marginBottom: '20px'}}>Наша
                                команда</h1>
                            <div className="row">
                                {[1, 2, 3, 4].map(x =>
                                    <div key={x} className="col-6 col-md-3 team-memb">
                                        <Member name="ИРИНА ОКОЛИТА" position="Главный дизайнер" icon={makaka}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12">
                            <h1 className='title'> Что мы еще предлагаем</h1>
                            <div className="row">
                                <div className="col-sm-6 no-padding">
                                    <img src={design3} alt="" className='img-fluid mb-5'/>
                                </div>
                                <br/>
                                <div className="col-sm-6">
                                    {[1, 3, 5].map(x => {
                                        return <div key={x} className="row d-flex justify-content-around">
                                            <div className="col-xs-6 d-flex flex-column align-items-center">
                                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                                <p className="about-adv">ПРЕИМУЩЕСТВО {x}</p>
                                            </div>
                                            <div className="col-xs-6 d-flex flex-column align-items-center">
                                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                                <p className="about-adv">ПРЕИМУЩЕСТВО {x + 1}</p>
                                            </div>
                                        </div>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section7'>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 d-flex flex-column align-items-center">
                            <h1 className='white-text white-title title'>Отзывы клиентов</h1>
                                <SliderFooter/>
                            <Button white={true} value='Показать все отзывы' classes='mt-5 p-3'/>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section id={'section6'} className={'section'}>*/}
            {/*<h1 className='title'>Ход работы</h1>*/}
            {/*<div className="work-box float1">*/}
            {/*<Describe num='1'*/}
            {/*text='5 серпня 2004 року у Венесуелі відбувся референдум щодо можливої*/}
            {/*дострокової відставки глави держави Уго Чавеса. 17 серпня стало відомо,*/}
            {/*що США відмовилися визнавати результати референдуму й закликали розпочати'*/}
            {/*icon={logo}/>*/}
            {/*<img src={logo} alt='' className="box-behind"/>*/}
            {/*</div>*/}
            {/*<div className="work-box float0">*/}
            {/*<Describe num='2'*/}
            {/*text="2 березня 2006 року одностайним рішенням Національних зборів (парламенту)*/}
            {/*Венесуели були ухвалені зміни в державній символіці, запропоновані президентом країни"*/}
            {/*icon={logo}/>*/}
            {/*<img src={logo} alt='' className="box-behind"/>*/}
            {/*</div>*/}
            {/*<div className="work-box float1">*/}
            {/*<Describe num='3'*/}
            {/*text="Президент Венесуели Уго Чавес, представляючи нову символіку, назвав своє нововведення*/}
            {/*«зіркою Болівара»"*/}
            {/*icon={logo}/>*/}
            {/*<img src={logo} alt='' className="box-behind"/>*/}
            {/*</div>*/}
            {/*</section>*/}
        </div>;
    }
}

export default withLocalize(Design);