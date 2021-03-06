﻿import React, {Component} from 'react';
import '../styles/Footer.css'
import '../styles/settings.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Translate, withLocalize} from 'react-localize-redux'
import me from '../img/irina.jpg';
import logo from '../img/logo.png';
import Button from './Button'
import phone from '../img/footer/phone.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import mail from '../img/footer/mail.jpg';
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
import fb from '../img/fb-green.png';
import inst from '../img/inst-green.png';
import {renderToStaticMarkup} from "react-dom/server";
import ReactModal from 'react-modal';
import contactsTranslations from '../translations/footer.json'
import {postRequest} from '../api.js'


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
    let images = [Img00, Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09]
    return (


      <Slider className={'text-center footer-slider'} {...settings}>
        {images.map((x, i) => {
          return <div key={i}>
            <a target={'_blank'} href={'https://www.instagram.com/okolitadesign/'}>
              <img className="img-fluid" src={x}/>
            </a>
          </div>
        })}
      </Slider>

    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: "Русский", code: "ru" },
        { name: "Українська", code: "ua" }
      ],
      options: { renderToStaticMarkup }
    });

    this.props.addTranslation(contactsTranslations);
    this.state = {
      showModal: false,
      name: '',
      phone: '',
      showMsg: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenMsg = this.handleOpenMsg.bind(this);
    this.handleCloseMsg = this.handleCloseMsg.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleCloseMsg() {
    this.setState({ showMsg: false });
  }
  handleOpenMsg() {
    this.setState({ showMsg: true });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    postRequest({ name: this.state.name, phone: this.state.phone });
  }

  render() {
    return (
      <section id={'footer'}>
        <div className="container-fluid ">
          <div className="footer-form-section gray-background row d-flex justify-content-center">
            <div className="col-12">

              <h3 className="text-center about-logo title">
                <Translate id={'footer.title-1'}/>

              </h3>


            </div>

            <div className="col-12  d-flex justify-content-center">
              <div className="col-lg-9 col-sm-12">
                <div className={'row d-flex justify-content-center'}>
                  <div className="col-md-7 col-sm-12">
                    <img className={'me-photo'} src={me}/>
                    <h5><Translate id='footer.nameD'/></h5>
                    <br/>
                    <p>
                      <Translate id="footer.fondTsutat1"/>

                    </p>
                    <p>
                      <Translate id="footer.fondTsutat2"/>

                    </p>
                    <br/>
                    <figure className="quote" style={{marginTop:"30px"}}>
                      <p className="curly-quotes">
                        <Translate id="footer.fondTsutat3" />


                      </p>
                    </figure>
                  </div>
                  <div className={'col-md-1 col-sm-12'}></div>
                  <div className="form-footer-box col-md-4 col-sm-7 text-center">
                    <div className={'footer-form '}>
                      <h5><Translate id="footer.back-call"/></h5>
                      <p className={'wait'}></p>
                      <br/>
                      <Translate id={'footer.title-1'}>
                        {({ translate }) => <input id='name-s' name="name" value={this.state.name}
                                                   onChange={this.handleChangeName}
                                                   placeholder={translate('footer.modal-name')}/>}
                      </Translate>
                      <br/>
                      <br/>
                      <div className={'row'}>
                        <div className={'col-12'}>
                          <Translate id={'footer.title-1'}>
                            {({ translate }) => <input id='phone-s' name="phone" value={this.state.phone}
                                                       onChange={this.handleChangePhone}
                                                       placeholder={translate('footer.modal-phone')}/>}
                          </Translate>
                        </div>
                        <div className={'col-12'} style={{marginTop:"40px"}}>
                          <Button green="true" classes={'form-btn'}
                                  onclick={() => {
                                    let name = document.getElementById('name-s').value;
                                    let phone = document.getElementById('phone-s').value;
                                    if(name==' ' || phone ==' ' || name=='' || phone =='') return;
                                    let formData = new FormData()
                                    formData.append('name',name);
                                    formData.append('phone',phone);
                                    postRequest(formData).then(res => console.log(res));
                                    this.handleOpenMsg();
                                    setTimeout(this.handleCloseMsg, 1500);
                                  }} value={'footer.consultation'}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-12 no-padding">
              <h3 className="text-center about-logo title title-white">
                Наш Instagram
              </h3>


            </div>
            <div className={'col-12 no-padding'}>
              <SliderFooter/>
            </div>
            <div className="col-12 soc d-flex justify-content-center align-items-center"
                 style={{ width: '60%', padding: '15px 0 25px 0' }}>
              <div className={'row d-flex justify-content-center'} style={{ margin: 0 }}>
                <div className="col-12 col-md-6">
                  <h5 className={'text-center'}><Translate id='footer.soc'/></h5>
                </div>
                <div className="col-3 col-md-2 d-flex justify-content-center">
<button  style={{background: "transparent",
    outline: "none",
    border: "none", }}  onClick={() =>window.location.href="https://www.facebook.com/okolitadesign/"}><img src={fb} alt="" className='img-link'/></button>
                </div>
                <div className="col-3 col-md-2 d-flex justify-content-center">
                  <button   style={{background: "transparent",
    outline: "none",
    border: "none", }}  onClick={() =>window.location.href="https://instagram.com/okolitadesign?utm_source=ig_profile_share&igshid=mcc8f8tafw8e"}><img src={inst} alt="" className='img-link'/></button>
                </div>
              </div>
            </div>
            <div className={'footer-info col-12'}>
              <div className={'row d-flex  justify-content-center'}>
                <div className={'col-12 col-md-10 col-lg-9'}>
                  <div className={'row d-flex  justify-content-between footer-info-cell'}>
                    <div className={'col-6 col-md-3 col-lg-3 d-flex align-items-center justify-content-center'}>
                      <img className=" footer-logo" src={logo}/>
                    </div>
                    <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                      <p><a className={'phone'} href="tel:+380971234567"><img
                        className={'img-fluid'} src={phone}/> +38(097)904 30 38</ a></p>
                    </div>
                    <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                      <p><a className={'mail'} href="mailto:okolitadesign@gmail.com"><img
                        src={mail}/> okolitadesign@gmail.com</a></p>
                    </div>
                    <div className={'col-6 col-md-3 col-lg-3 text-center'}>
                      <p className={"footer-button-box"}><Button onclick={this.handleOpenModal}
                                                                 white={true}
                                                                 value={'footer.recall'}
                                                                 classes='black-background footer-button '/>
                        <ReactModal
                          isOpen={this.state.showModal}
                          contentLabel="onRequestClose Example"
                          onRequestClose={this.handleCloseModal}
                        >
                          <div className={'modal-form text-center'}>
                            <br/>
                            <h5><Translate id="footer.back-call"/></h5>
                            <br/>
                            <br/>
                            <Translate id={'footer.title-1'}>
                              {({ translate }) => <input id='name-m' name="name"
                                                         placeholder={translate('footer.modal-name')}/>}
                            </Translate>
                            <br/>
                            <br/>
                            <div className={'row'}>
                              <div className={'col-12'}>
                                <Translate id={'footer.title-1'}>
                                  {({ translate }) => <input id='phone-m' name="name"
                                                             placeholder={translate('footer.modal-phone')}/>}
                                </Translate>
                              </div>
                              <br/>
                              <br/>
                              <br/>
                              <div className={'col-12'}>
                                <Button green="true" classes={'form-btn black-green'}
                                        value={'footer.consultation'} onclick={() => {
                                  let name = document.getElementById('name-m').value;
                                  let phone = document.getElementById('phone-m').value;
                                  if(name==' ' || phone ==' ' || name=='' || phone =='') return;
                                  let formData = new FormData();
                                  formData.append('name',name);
                                  formData.append('phone',phone);
                                  postRequest(formData).then(res => console.log(res));
                                  this.handleCloseModal();
                                  this.handleOpenMsg();
                                  setTimeout(this.handleCloseMsg, 1500);
                                }}/>
                              </div>
                            </div>
                          </div>
                        </ReactModal>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ReactModal
                isOpen={this.state.showMsg}
                style={{content: {top: '30%', width: '300px', height: '150px'}}}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseMsg}
              >
                <div style={{display: 'flex', fontWeight:'500', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <p><Translate id='footer.callBack'/></p>
              </div>
              </ReactModal>
            </div>
            <div className="col-12 no-padding footer-privacy">
              <p className="text-center about-logo black-background">
                @ Okolita_design 2019
              </p>


            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withLocalize(Footer);
