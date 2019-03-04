import React, {Component} from 'react';
import '../styles/mainPage.css'
import '../styles/settings.css'
import {Link} from 'react-router-dom'
import Button from './Button'
// import logo from '../img/bg.jpg'
import contactsTranslations from '../translations/main.json'
// import design1 from '../img/design1.jpg'
import design3 from '../img/design3.jpg'
import design5 from '../img/design5.jpg'
// import team from '../img/team.jpg'
import ReactModal from 'react-modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {withLocalize} from 'react-localize-redux'
// import item1 from '../img/footer/item1.png';
// import item2 from '../img/footer/item2.png';
// import item3 from '../img/footer/item3.png';
// import item4 from '../img/footer/item4.png';
// import item5 from '../img/footer/item5.png';
// import item6 from '../img/footer/item6.png';
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
  componentDidMount() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }    render() {
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
                                    <p>Комментарий</p>

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
                                    <p>Комментарий</p>

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
                                    <p>Комментарий</p>

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
                                    <p>Комментарий</p>

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
     this.state = {
        showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
}

handleOpenModal () {
    this.setState({ showModal: true });
}

handleCloseModal () {
    this.setState({ showModal: false });
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
                        <p className='white-text' id='text'>Тут мечты обретают реальность</p>
                    </div>


                </div>
              <div style={{marginTop: '50px', padding: '20px'}}/>
              <Button green={true} onclick={this.handleOpenModal} value={'des.btn-first'} classes={'title-btn'}/>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
              >
                <form className={'modal-form text-center'}>
                  <h5>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</h5>
                  <p className={'wait'}>Закажите консультацию и мы свяжемся с Вами через
                    несколько минут</p>
                  <br/>
                  <input name={'name'}
                         placeholder={'Ваше имя'}/>
                  <br/>
                  <br/>
                  <div className={'row'}>
                    <div className={'col-12'}>
                      <input name={'phone'}  placeholder={'Ваш телефон'}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className={'col-12'}>
                      <Button green="true" classes={'form-btn black-green'}value={'footer.consultation'}/>
                    </div>
                  </div>
                </form>
              </ReactModal>
            </section>

            <section id={'section0'}>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-12 d-flex flex-column justify-content-center align-items-center">
                            <h3 className={'title'}>Наши работы</h3>

                            <MiniPortfolio/>
                            <br/>
                            <Link to='/portfolio'>
                            <Button green={true}  value={'des.btn-all'} classes='black-green'/>
                            </Link>
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
                            <div className="col-md-12 mt-5 mb-5">
                                <img src={design3} alt="" className={'img-fluid'} style={{width: "100%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'section4'} className={'section'}>
                <h1 className='title' >О студии</h1>
                <div className="row">
                    <div className="col-sm-2"/>
                    <div className="col-sm-4">
                        <h5 className="title no-before" style={{textAlign: 'left', padding: '0 30px'}}>OKOLITA DESIGN</h5>
                        <p className="about-text">
                            Добро пожаловать в студию дизайна интерьеров Okolita Design
                            Мы создаем не просто дизайн, а настроение и атмосферу Вашего интерьера. Для нас главное — это индивидуальный характер каждого проекта
                            Мы работаем для того, чтобы именно ваши мечты об идеальном интерьере воплотились в реальность, потому что… мы все разные.
                            Нас многое отличает друг от дуга:
                            -привычки и образ жизни;
                            -дизайнерские вкусы и предпочтения;
                            -финансовые возможности…
                            Но стремление к прекрасному, желание проводить время в красивых и функциональных помещениях — общее.
                            При этом понимание красоты и функциональности тоже у каждого свое.
                            Мы стараемся всегда быть в курсе последних тенденций в сфере
                            дизайна интерьеров.
                            Следим за новинками на рынке отделочных материалов и
                            мебели. Часто посещаем разнообразные тематические международные
                            выставки и мероприятия в Украине и Европе.
                        </p>
                        <p className="about-text">
                        </p>
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
