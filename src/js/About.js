import React, {Component} from 'react';
import logo from '../img/about-bg.jpg';
import item1 from '../img/footer/item1.png';
import item2 from '../img/footer/item2.png';
import item3 from '../img/footer/item3.png';
import item4 from '../img/footer/item4.png';
import item5 from '../img/footer/item5.png';
import item6 from '../img/footer/item6.png';
import '../styles/About.css'
import YouTube from 'react-youtube';
import Button from './Button'
import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/about.json'
import {withLocalize} from 'react-localize-redux'
import ReactModal from 'react-modal';


class About extends Component {
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
  componentDidMount() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {

        const opts = {
            playerVars: {
                autoplay: 0,

            }
        };
        return (

            <section id="about">

                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-xs-12">
                            <h3 className="text-center about-logo title">
                                О студии
                            </h3>
                            <div>
                                <img className="img-fluid" src={logo}/>
                            </div>
                            <br/>
                        </div>
                        <div className="col-md-8 col-xs-12">
                            <h6>OKOLITA DESIGN</h6>
                            <br/>
                            <p>Добро пожаловать в студию дизайна интерьеров <b>Okolita Design!</b> <br/>
                                Мы создаем не просто дизайн, а настроение и атмосферу Вашего интерьера. Для нас главное
                                — это индивидуальный характер каждого проекта.</p>
                            <p> Мы работаем для того, чтобы именно ваши мечты об идеальном интерьере воплотились в
                                реальность, потому что… мы все разные. </p>
                        </div>

                        <div className="col-md-8 col-xs-12">
                            <p><b>Нас многое отличает друг от дуга:</b>
                            </p>
                            <ul>
                                <li>
                                    привычки и образ жизни;
                                </li>
                                <li>
                                    дизайнерские вкусы и предпочтения;
                                </li>
                                <li>
                                    финансовые возможности…
                                </li>
                            </ul>
                            <p>Но стремление к прекрасному, желание проводить время в красивых и функциональных
                                помещениях — общее.
                                При этом понимание красоты и функциональности тоже у каждого свое.
                                Мы стараемся всегда быть в курсе последних тенденций в сфере
                                дизайна интерьеров.
                            </p>


                        </div>

                    </div>
            <br/>
            <h5 className={'text-center'}>Так что же отличает нас от других?</h5>
            <br/>
                    <div className="d-flex justify-content-center advantages ">
                        <div className="col-md-10 col-sm-10">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                <div className="row">
                                    <div className="col-4 adv-img-container">
                                        <img className="img-fluid adv-img" src={item1} alt=''/>
                                    </div>
                                    <div className="col-8 advantage">
                                        <span className="advantage-text">Начало ремонта еще до полного окончания работы над дизайн-проектом</span>
                                    </div>
                                </div>
                            </div>

                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item2} alt=''/>
                                        </div>
                                        <div className="col-8 advantage">
                                            <span className="advantage-text">Подбор чистовых отделочных материалов, сантехники, светильников и мебели</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                                    <div className="row">
                                        <div className="col-4 adv-img-container">
                                            <img className="img-fluid adv-img" src={item3} alt=''/>
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
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-xs-12">
                    <figure className="quote">
                        <p className="curly-quotes">Какой бы красивый не был проект , он останется только
                            визуализацией без качественной реализации
                        </p>
                    </figure>

                        </div>
                    </div>
                    <br/>
                    <div className="row title-white d-flex justify-content-center">
                        <div className="col-12">
                            <h3 className="text-center about-logo title title-white">
                                Как мы работаем
                            </h3>
                        </div>
                        <div className="col-12 col-sm-8 title-white ">
                            <YouTube
                                videoId="2g811Eo7K8U"
                                opts={opts}
                                onReady={this._onReady}
                                className={'video white-border'}
                            />
                        </div>
                        <div className="col-8 d-flex justify-content-center">
                            <Button white={true} value="about.btn" onclick={this.handleOpenModal} classes='proj-btn'/>
                        </div>
                    </div>
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
                </div>
            </section>
        );
    }
}

export default withLocalize(About);
