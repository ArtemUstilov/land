import React, {Component} from 'react';
import logo from '../img/about-bg.jpg';

import '../styles/About.css'
import Button from './Button'
import denis from '../img/denisTeam.jpg';
import alena from '../img/alenaTeam.jpg';
import alex from '../img/alexTeam.jpg';
import irina from '../img/irina.jpg';
import {renderToStaticMarkup} from "react-dom/server";
import contactsTranslations from '../translations/about.json'
import {Translate, withLocalize} from 'react-localize-redux'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactModal from 'react-modal';
import item1 from '../img/footer/item1.png';
import item2 from '../img/footer/item2.png';
import item3 from '../img/footer/item3.png';
import item4 from '../img/footer/item4.png';
import item5 from '../img/footer/item5.png';
import item6 from '../img/footer/item6.png';
import newPhoto from '../img/newAbout.jpg';

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
      if (msg) msg.style.opacity = 0;
    })
  }

  render() {
    return (
      <div className='d-flex flex-column justify-content-start align-items-center'>
        <div style={{ height: '55px' }}>
          <p className="mem-name mb-2"><Translate id={this.props.name}/></p>
          <p className='mem-position mb-2'><Translate id={this.props.position}/></p>
        </div>
        <img id={`img${this.props.i}`} src={this.props.icon} alt="" className="member-icon"
             style={{ width: '100%', height: '100%', border: '2px solid black' }}/>
        <div className='comment' id={`comment${this.props.i}`}>
          <p style={{ position: 'absolute' }} id={`p${this.props.i}`}>{this.props.c}</p>
          <div style={{ borderBottom: '2px solid black', height: '5px', width: '100%' }}/>
          <div style={{ borderBottom: '2px solid black', height: '5px', width: '50%' }}/>
          <div style={{ borderBottom: '2px solid black', height: '5px', width: '15%' }}/>
        </div>
      </div>
    )
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(contactsTranslations);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
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
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <h3 className="text-center about-logo title">

                  <Translate id='about.studio'/>
                </h3>
              </ScrollAnimation>
              <div>
                <img className="img-fluid" src={newPhoto}/>
              </div>
              <br/>
            </div>
            <div className="col-md-8 col-xs-12">
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <h6>OKOLITA DESIGN</h6>
              </ScrollAnimation>
              <br/>
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <p><Translate id='about.aboutFirst1'/><b>Okolita Design!</b> <br/><Translate id='about.aboutFirst2'/>
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <p><Translate id='about.aboutFirst3'/></p>
              </ScrollAnimation>
            </div>

            <div className="col-md-8 col-xs-12">
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <p><b><Translate id='about.diff'/></b>
                </p>
              </ScrollAnimation>
              <ul>
                <li>
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <Translate id='about.diff1'/>
                  </ScrollAnimation>
                </li>
                <li>
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <Translate id='about.diff2'/>
                  </ScrollAnimation>
                </li>
                <li>
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <Translate id='about.diff3'/>
                  </ScrollAnimation>
                </li>
              </ul>
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <p>
                  <Translate id='about.but'/>
                </p>
              </ScrollAnimation>


            </div>

          </div>
          <section id='section7' style={{ backgroundColor: '#fff' }}>
            <div className="container-fluid ">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-12">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <h1 className='title' style={{ marginBottom: '20px' }}>Наша команда</h1>
                  </ScrollAnimation>
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
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
                          img: alena,
                          name: 'alena.name',
                          job: 'alena.job',
                          c: '"При создании  интерьера для меня важно создать максимально реалистичные визуализации,' +
                          'для того что б клиент мог окунуться в свой интерьер еще до начала ремонтных работ ."'
                        },
                        {
                          img: denis,
                          name: 'denis.name',
                          job: 'denis.job',
                          c: '"Я люблю свою работу . Потому что с помощью визуализации можно показать не только мебель, материалы и декор ,' +
                          '                              которыми будет обустроено помещение . А и передать атмосферу , которой будет наполненное жилище."'
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
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>
          <br/>
          <h5 className={'text-center'}><Translate id='about.so'/></h5>
          <br/>
          <div className="d-flex justify-content-center advantages ">
            <div className="col-md-10 col-sm-10">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <div className="row">
                      <div className="col-4 adv-img-container">
                        <img className="img-fluid adv-img" src={item1} alt=''/>
                      </div>
                      <div className="col-8 advantage">
                        <span className="advantage-text"><Translate id='about.adv1'/></span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <div className="row">
                      <div className="col-4 adv-img-container">
                        <img className="img-fluid adv-img" src={item2} alt=''/>
                      </div>
                      <div className="col-8 advantage">
                        <span className="advantage-text"><Translate id='about.adv2'/></span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <div className="row">
                      <div className="col-4 adv-img-container">
                        <img className="img-fluid adv-img" src={item3} alt=''/>
                      </div>
                      <div className="col-8 advantage">
                        <span className="advantage-text"><Translate id='about.adv3'/></span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <div className="row">
                      <div className="col-4 adv-img-container">
                        <img className="img-fluid adv-img" src={item4}/>
                      </div>
                      <div className="col-8 advantage">
                        <span className="advantage-text"><Translate id='about.adv4'/></span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <div className="row">
                      <div className="col-4 adv-img-container">
                        <img className="img-fluid adv-img" src={item5}/>
                      </div>

                      <div className="col-8 advantage">
                        <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                          <span className="advantage-text"><Translate id='about.adv5'/></span>
                        </ScrollAnimation>
                      </div>

                    </div>
                  </ScrollAnimation>
                </div>

                <div className="col-md-6 col-sm-12 col-lg-4 adv-cell">
                  <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                    <div className="row">
                      <div className="col-4 adv-img-container">
                        <img className="img-fluid adv-img" src={item6}/>
                      </div>
                      <div className="col-8 advantage">
                        <span className="advantage-text"><Translate id='about.adv6'/></span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>


              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-xs-12">
              <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <figure className="quote">
                  <p className="curly-quotes"><Translate id='about.fraza'/>
                  </p>
                </figure>
              </ScrollAnimation>
            </div>
          </div>
          <br/>
          {/*<div className="row title-white d-flex justify-content-center">
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
                    </div>*/}
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
        </div>
      </section>
    );
  }
}

export default withLocalize(About);
