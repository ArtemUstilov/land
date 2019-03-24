import React, {Component} from 'react';
import '../styles/mainPage.css'
import '../styles/settings.css'
import {Link} from 'react-router-dom'
import Button from './Button'
// import logo from '../img/bg.jpg'
import {Translate, withLocalize} from 'react-localize-redux'
import contactsTranslations from '../translations/main.json'
// import design1 from '../img/design1.jpg'
import design3 from '../img/design3.jpg'
import design5 from '../img/design5.jpg'
// import team from '../img/team.jpg'
import ReactModal from 'react-modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import item1 from '../img/1.png';
import item2 from '../img/2.png';
import item3 from '../img/3.png';
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
import denis from '../img/denisTeam.jpg';
import alena from '../img/alenaTeam.jpg';
import alex from '../img/alexTeam.jpg';
import irina from '../img/irina.JPG';

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
                        <div className={'rev col-md-12 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={item1}/>
                                </div>
                                <div className={'rev-text col-8'}>
                                    <h5 className={'rev-name'}>Светлана С.</h5>
                                    <p className={'rev-date'}>26.12.2018</p>
                                    <p>Очень понравилась работа дизайнера. Профессионально и грамотно был построен
                                        диалог, учтены все пожелания и предпочтения. Результатом осталась довольна вся
                                        семья!</p>

                                </div>
                            </div>
                        </div>
                        <div className={'rev col-md-12 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={item2}/>
                                </div>
                                <div className={'rev-text col-8'}>
                                    <h5 className={'rev-name'}>Олена К.</h5>
                                    <p className={'rev-date'}>13.03.2018</p>
                                    <p>Індивідуальний підхід
                                        до клієнта, креативність та освідченість дизайнерів. Особливу подяку висловлюємо
                                        дизайнеру Ірині Околіті.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'container-fluid'}>
                    <div className={'row rev-box d-flex justify-content-between'}>
                        <div className={'rev col-md-12 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={item3}/>
                                </div>
                                <div className={'rev-text col-8'}>
                                    <h5 className={'rev-name'}>Максим</h5>
                                    <p className={'rev-date'}>18.12.2018</p>
                                    <p>Хочу вам сказать очень доволен результатом работы, я такого не помню чтобы
                                        визуализация понравилась с первого раза и в точку! Видна команда
                                        профессионалов!</p>

                                </div>
                            </div>
                        </div>
                        <div className={'rev col-md-12 col-lg-5'}>
                            <div className={'row'}>
                                <div className={'rev-img-box col-4'}>
                                    <img className={'img-fluid rev-img'} src={makaka}/>
                                </div>
                                <div className={'rev-text col-8'}>
                                    <h5 className={'rev-name'}>Дмитрий П.</h5>
                                    <p className={'rev-date'}>18.03.2019</p>
                                    <p>
                                        Целиком удовлетворён работой. Всё получилось красиво и быстро. Все пожелания
                                        были учтены</p>

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
    componentDidMount() {
        let el = document.getElementById(`img${this.props.i}`);
        el.addEventListener('mouseover', () => {
            let t = document.getElementById(`comment${this.props.i}`);
            let msg = document.getElementById(`p${this.props.i}`);
            msg.style.opacity = 1;
            msg.style.top = -msg.clientHeight + 'px'
            t.style.marginTop = msg.clientHeight + 'px';
        })
        el.addEventListener('mouseleave', () => {
            let t = document.getElementById(`comment${this.props.i}`);
            let msg = document.getElementById(`p${this.props.i}`);
            t.style.marginTop = 0;
            msg.style.opacity = 0;
        })
        window.addEventListener('resize', () => {
            let t = document.getElementById(`comment${this.props.i}`);
            let msg = document.getElementById(`p${this.props.i}`);
            msg.style.opacity = 0;
        })
    }

    render() {
        return (
            <div className='d-flex flex-column justify-content-start align-items-center'>
                <div style={{height: '55px'}}>
                    <p className="mem-name mb-2"><Translate id={this.props.name}/></p>
                    <p className='mem-position mb-2'><Translate id={this.props.position}/></p>
                </div>
                <img id={`img${this.props.i}`} src={this.props.icon} alt="" className="member-icon"
                     style={{width: '100%', height: '100%', border: '2px solid black'}}/>
                <div className='comment' id={`comment${this.props.i}`}>
                    <p style={{position: 'absolute'}} id={`p${this.props.i}`}>{this.props.c}</p>
                    <div style={{borderBottom: '2px solid black', height: '5px', width: '100%'}}/>
                    <div style={{borderBottom: '2px solid black', height: '5px', width: '50%'}}/>
                    <div style={{borderBottom: '2px solid black', height: '5px', width: '15%'}}/>
                </div>
            </div>
        )
    }
}

class Design extends Component {
    constructor(props) {
        super(props);
        this.props.addTranslation(contactsTranslations);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }


    render() {
        let no_pad = {
            padding: '5px'
        }
        return <div className="design">
            <section id={'section1'} className={'section'}>
                <div className="title-box ps-top-to-bottom">
                    <h1 className='white-text title1'><Translate id="des.design"/></h1>
                    <div id='wrapper'>
                        <p className='white-text' id='text'><Translate id="des.here"/></p>
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
                                <input name={'phone'} placeholder={'Ваш телефон'}/>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className={'col-12'}>
                                <Button green="true" classes={'form-btn black-green'} value={'footer.consultation'}/>
                            </div>
                        </div>
                    </form>
                </ReactModal>
            </section>


            <section id='section7' style={{backgroundColor: '#fff'}}>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-12">
                            <h1 className='title' style={{marginBottom: '20px'}}>Наша команда</h1>
                            <div className="row">
                                {[
                                    {
                                        img: irina,
                                        name: 'irina.name',
                                        job: 'irina.job',
                                        c: '"Очень важно работать именно с человеком, преобразовывая его характер и потребности в его личный стиль, в его собственный идеальный интерьер. ' +
                                            'Я работаю с людьми, а не с определенным стилем, поскольку считаю, что дом - это, в первую очередь, продолжение его хозяина."'
                                    },
                                    {
                                        img: denis,
                                        name: 'denis.name',
                                        job: 'denis.job',
                                        c: '"Я люблю свою работу . Потому что с помощью визуализации можно показать не только мебель, материалы и декор ,' +
                                            '                              которыми будет обустроено помещение . А и передать атмосферу , которой будет наполненное жилище."'
                                    },
                                    {
                                        img: alena,
                                        name: 'alena.name',
                                        job: 'alena.job',
                                        c: '"При создании  интерьера для меня важно создать максимально реалистичные визуализации,' +
                                            'для того что б клиент мог окунуться в свой интерьер еще до начала ремонтных работ ."'
                                    },
                                    {
                                        img: alex,
                                        name: 'alex.name',
                                        job: 'alex.job',
                                        c: '"Я люблю реализовывать самые смелые идеи дизайнеров ,' +
                                            '                              это дает возможность творить и наслаждаться своей работой."'
                                    }
                                ].map((x, i) =>
                                    <div key={x.name} className="col-12 col-md-3 team-memb">
                                        <Member name={'des.team.' + x.name} i={i}
                                                position={'des.team.' + x.job} icon={x.img} c={x.c}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'section0'} style={{backgroundColor: '#000'}}>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-12 d-flex flex-column justify-content-center align-items-center">
                            <h3 className={'title'}>Наши работы</h3>

                            <MiniPortfolio/>
                            <br/>
                            <Link to='/portfolio'>
                                <Button green={true} value={'des.btn-all'} classes='white-green green'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id={'section4'} className={'section'}>
                <h1 className='title'>О студии</h1>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <h5 className="title no-before" style={{textAlign: 'left', padding: '0 30px'}}>OKOLITA
                            DESIGN</h5>
                        <br/>
                        <div className="">
                            <img src={design5} alt="" className="img-fluid" style={{float: "right", width: "50%"}}/>

                            <Translate id="des.welcome"/><br/>
                            <Translate id="des.aboutStart"/>

                            <br/>
                            <br/>
                            <p><b><Translate id="des.liTitle"/></b></p>
                            <ul>
                                <li><Translate id="des.aboutLi1"/></li>
                                <li><Translate id="des.aboutLi2"/></li>
                                <li><Translate id="des.aboutLi3"/></li>
                            </ul>
                            <Translate id="des.aboutEnd1"/>
                            <p><Translate id="des.aboutEnd2"/></p>

                        </div>

                    </div>
                    <div className="col-sm-1"/>
                </div>
            </section>

            <section id='section7'>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9 col-12 d-flex flex-column align-items-center">
                            <h1 className='white-text white-title title'><Translate id="des.reviews"/></h1>
                            <SliderFooter/>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>

        </div>;
    }
}

export default withLocalize(Design);
