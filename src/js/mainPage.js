import React, {Component} from 'react';
import '../styles/mainPage.css'
import '../styles/settings.css'
import Button from './Button'
import logo from '../img/bg.jpg'
import contactsTranslations from '../translations/main.json'
import design1 from '../img/design1.jpg'
import design3 from '../img/design3.jpg'
import design5 from '../img/design5.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withLocalize} from 'react-localize-redux'
import item1 from '../img/footer/item1.png';
import item2 from '../img/footer/item2.png';
import item3 from '../img/footer/item3.png';
import item4 from '../img/footer/item4.png';
import item5 from '../img/footer/item5.png';
import item6 from '../img/footer/item6.png';
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

class MiniPortfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            className: 'portfolio-slider-mini',
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 800,
            rows: 2,
            slidesToScroll: 3,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 756,
                    settings: {
                        arrows: false

                    }
                }
            ]
        };
        let images = [Img1_1, Img1_2, Img1_3, Img1_4, Img1_5, Img1_6, Img2_1, Img2_2, Img2_3, Img2_4,
            Img2_5, Img2_6, Img3_1, Img3_2, Img3_3, Img3_4, Img3_5, Img3_6, Img4_1, Img4_2,
            Img4_3, Img4_4, Img4_5, Img4_6];
        return (

            <Slider  {...settings}>
                {images.map(im => {
                    return <div key={im}><img className="img-fluid sm-border-black" src={im}/></div>
                })}
            </Slider>
        );
    }
}

class SliderFooter extends Component {
    render() {
        const settings = {
            className: "main-slider text-center",
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false
                    }
                }
            ]
        };
        return (

            <Slider {...settings}>
                <div className={'container-fluid'}>
                    <div className={'row rev-box d-flex justify-content-between'}>
                        <div className={'rev col-sm-10 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={makaka}/>
                                </div>
                                <div className={'rev-text col-7'}>
                                    <h5 className={'rev-name'}>Борис Борисович</h5>
                                    <p className={'rev-date'}>18.03.2019</p>
                                    <p>Я ебал твою телку уууу. Я ебал твою телку ааа</p>

                                </div>
                            </div>
                        </div>
                        <div className={'rev col-sm-10 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={makaka}/>
                                </div>
                                <div className={'rev-text col-7'}>
                                    <h5 className={'rev-name'}>Борис Борисович</h5>
                                    <p className={'rev-date'}>18.03.2019</p>
                                    <p>Я ебал твою телку уууу. Я ебал твою телку ааа</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'container-fluid'}>
                    <div className={'row rev-box d-flex justify-content-between'}>
                        <div className={'rev col-sm-10 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={makaka}/>
                                </div>
                                <div className={'rev-text col-7'}>
                                    <h5 className={'rev-name'}>Борис Борисович</h5>
                                    <p className={'rev-date'}>18.03.2019</p>
                                    <p>Я ебал твою телку уууу. Я ебал твою телку ааа</p>

                                </div>
                            </div>
                        </div>
                        <div className={'rev col-sm-10 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={makaka}/>
                                </div>
                                <div className={'rev-text col-7'}>
                                    <h5 className={'rev-name'}>Борис Борисович</h5>
                                    <p className={'rev-date'}>18.03.2019</p>
                                    <p>Я ебал твою телку уууу. Я ебал твою телку ааа</p>

                                </div>
                            </div>
                        </div>
                    </div>
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
        return <div className="design">
            <section id={'section1'} className={'section'}>
                <div className="title-box ps-top-to-bottom">
                    <h1 className='white-text title1'>ДИЗАЙН ИНТЕРЬЕРА</h1>
                    <div id='wrapper'>
                        <p className='white-text' id='text'>Сделам Ваш интерьер стильным и уютным</p>
                    </div>
                    <Button green={true} value={'des.btn-first'} classes={'title-btn'}/>
                </div>
            </section>
            <section id={'section0'}>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className={'title'}>Наши работы</h1>

                            <MiniPortfolio/>
                            <br/>
                            <Button green={true} value={'des.btn-all'} classes='black-green'/>

                        </div>
                    </div>
                </div>
            </section>

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
            <section id={'section4'} className={'section'}>
                <h1 className='title'>О студии</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="title no-before" style={{textAlign: 'left', padding: '0 30px'}}>OKOLITA DESIGN</h5>
                        <p className="about-text">
                            Існує версія, що назву країні дав італійський картограф Амеріго Веспуччі, який 1499 року
                            відвідав ці місця у складі експедиції Алонсо де Охеди. Мандрівники побачили оселі
                            місцевого населення, встановлені на палях над водою біля озера Маракайбо. Це нагадало їм
                            європейську Венецію, внаслідок чого виникла назва «Венесуела» (Venezuela), тобто «Мала
                            Венеція».
                        </p>
                        <p className="about-text">
                            Незалежність від Іспанії держава отримала 1830 року після повстання, очолюваного Симоном
                            Боліваром. Після тривалого періоду диктатур 1961 року було прийнято нову Конституцію
                            Венесуели.
                        </p>
                        {/*<div className="row">*/}
                            {/*<div className="col-xs-6 about-row">*/}
                                {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
                                {/*<p className="about-adv">ПРЕИМУЩЕСТВО 1</p>*/}
                            {/*</div>*/}
                            {/*<div className="col-xs-6 about-row">*/}
                                {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
                                {/*<p className="about-adv">ПРЕИМУЩЕСТВО 2</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-xs-6 about-row">*/}
                                {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
                                {/*<p className="about-adv">ПРЕИМУЩЕСТВО 3</p>*/}
                            {/*</div>*/}
                            {/*<div className="col-xs-6 about-row">*/}
                                {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
                                {/*<p className="about-adv">ПРЕИМУЩЕСТВО 4</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-xs-6 about-row">*/}
                                {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
                                {/*<p className="about-adv">ПРЕИМУЩЕСТВО 5</p>*/}
                            {/*</div>*/}
                            {/*<div className="col-xs-6 about-row">*/}
                                {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
                                {/*<p className="about-adv">ПРЕИМУЩЕСТВО 6</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="d-flex justify-content-center advantages ">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                        <div className="row">
                                            <div className="col-4 adv-img-container">
                                                <img className="img-fluid adv-img" src={item1}/>
                                            </div>
                                            <div className="col-8 advantage">
                                                <span className="advantage-text">Начало ремонта еще до полного окончания работы над дизайн-проектом</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                        <div className="row">
                                            <div className="col-4 adv-img-container">
                                                <img className="img-fluid adv-img" src={item2}/>
                                            </div>
                                            <div className="col-8 advantage">
                                                <span className="advantage-text">Подбор чистовых отделочных материалов, сантехники, светильников и мебели</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                        <div className="row">
                                            <div className="col-4 adv-img-container">
                                                <img className="img-fluid adv-img" src={item3}/>
                                            </div>
                                            <div className="col-8 advantage">
                                                <span className="advantage-text">Применение лучших и реальных материалов, которые можно приобрести в магазинах</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                        <div className="row">
                                            <div className="col-4 adv-img-container">
                                                <img className="img-fluid adv-img" src={item4}/>
                                            </div>
                                            <div className="col-8 advantage">
                                                <span className="advantage-text">Воплощение проекта, исходя из заданого бюджета</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                        <div className="row">
                                            <div className="col-4 adv-img-container">
                                                <img className="img-fluid adv-img" src={item5}/>
                                            </div>
                                            <div className="col-8 advantage">
                                                <span className="advantage-text">Система гибкой оплаты по мере выполнения проекта</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                        <div className="row">
                                            <div className="col-4 adv-img-container">
                                                <img className="img-fluid adv-img" src={item6}/>
                                            </div>
                                            <div className="col-8 advantage">
                                                <span className="advantage-text">Возможность работать удаленно - в онлайн режиме</span>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 no-img">
                        <img src={design5} alt="" className={'img-fluid'}/>
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

            {/*<section>*/}
            {/*<div className="container-fluid ">*/}
            {/*<div className="row d-flex justify-content-center">*/}
            {/*<div className="col-md-8 col-12">*/}
            {/*<h1 className='title'> Что мы еще предлагаем</h1>*/}
            {/*<div className="row">*/}
            {/*<div className="col-sm-6 no-padding">*/}
            {/*<img src={design3} alt="" className='img-fluid mb-5'/>*/}
            {/*</div>*/}
            {/*<br/>*/}
            {/*<div className="col-sm-6">*/}
            {/*{[1, 3, 5].map(x => {*/}
            {/*return <div key={x} className="row d-flex justify-content-around">*/}
            {/*<div className="col-xs-6 d-flex flex-column align-items-center">*/}
            {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
            {/*<p className="about-adv">ПРЕИМУЩЕСТВО {x}</p>*/}
            {/*</div>*/}
            {/*<div className="col-xs-6 d-flex flex-column align-items-center">*/}
            {/*<img src={logo} alt="" className="about-icon img-fluid"/>*/}
            {/*<p className="about-adv">ПРЕИМУЩЕСТВО {x + 1}</p>*/}
            {/*</div>*/}
            {/*</div>;*/}
            {/*})}*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</section>*/}
            <section id='section7'>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-12 d-flex flex-column align-items-center">
                            <h1 className='white-text white-title title'>Отзывы клиентов</h1>
                            <SliderFooter/>
                            <Button white={true} value='des.revs' classes='mt-5 p-3'/>
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