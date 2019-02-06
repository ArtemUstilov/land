import React, {Component} from 'react';
import '../styles/mainPage.css'
import '../styles/settings.css'
import Button from './Button'
import logo from '../img/bg.jpg'
import makaka from '../img/download.jpg'

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
class Member extends Component {
    render() {
        return (<div>
                <div className='mem-bg'/>
                <img src={this.props.icon} alt="" className="mem-icon"/>
                <p className="mem-name">{this.props.name}</p>
                <p className='mem-position'>{this.props.position}</p>
            </div>
        )
    }
}
class Design extends Component {
    render() {
        let no_pad = {
            padding: '5px'
        }
        return <div className="design">
            <section id={'section1'} className={'section'}>
                <div className="title-box ps-top-to-bottom">
                    <h1 className='white-text title1'>ДИЗАЙН ИНТЕРЬЕРА</h1>
                    <p className='white-text'>Сделам Ваш интерьер стильным и уютным</p>
                    <Button white={true} value="ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ" classes={'title-btn'}/>
                </div>
            </section>
            <section id={'section2'} className={'section'}>
                <h1 className={'title'}>Наши работы</h1>
                <div className={'proj-box'}>
                    <div className="row">
                        <div className="col-sm-4" style={no_pad}>
                            <img src={logo} alt="" className={'proj-img'}/>
                        </div>
                        <div className="col-sm-4" style={no_pad}>
                            <img src={logo} alt="" className={'proj-img'}/>
                        </div>
                        <div className="col-sm-4" style={no_pad}>
                            <img src={logo} alt="" className={'proj-img'}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4" style={no_pad}>
                            <img src={logo} alt="" className={'proj-img'}/>
                        </div>
                        <div className="col-sm-4" style={no_pad}>
                            <img src={logo} alt="" className={'proj-img'}/>
                        </div>
                        <div className="col-sm-4" style={no_pad}>
                            <img src={logo} alt="" className={'proj-img'}/>
                        </div>
                    </div>
                </div>
                <Button white={false} value="СМОТРЕТЬ ВСЕ РАБОТЫ" classes='proj-btn'/>
            </section>
            <section id={'section3'} className={'section'}>
                <div className="title-box ps-top-to-bottom">
                    <h1 className='white-text title white-title' style={{padding: '10px'}}>С чего начать
                        дизайн?</h1>
                    <p className='white-text'>Запишитесь на консультацию дизайнера</p>
                    <Button white={true} value="ЗАПИСАТЬСЯ СЕЙЧАС" classes='proj-btn'/>
                </div>
            </section>
            <section id={'section4'} className={'section'}>
                <h1 className='title'>О студии</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="title" style={{textAlign: 'left', padding: '0 30px'}}>OKOLITA DESIGN</h5>
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
                        <div className="row">
                            <div className="col-xs-6 about-row">
                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                <p className="about-adv">ПРЕИМУЩЕСТВО 1</p>
                            </div>
                            <div className="col-xs-6 about-row">
                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                <p className="about-adv">ПРЕИМУЩЕСТВО 2</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 about-row">
                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                <p className="about-adv">ПРЕИМУЩЕСТВО 3</p>
                            </div>
                            <div className="col-xs-6 about-row">
                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                <p className="about-adv">ПРЕИМУЩЕСТВО 4</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 about-row">
                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                <p className="about-adv">ПРЕИМУЩЕСТВО 5</p>
                            </div>
                            <div className="col-xs-6 about-row">
                                <img src={logo} alt="" className="about-icon img-fluid"/>
                                <p className="about-adv">ПРЕИМУЩЕСТВО 6</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={logo} alt="" className={'proj-img proj-big-image'}/>
                    </div>
                </div>
            </section>
            <section id={'section5'} className={'section'}>
                <h1 className='white-text white-title title'>Как мы работаем</h1>
                <img src={logo} className={'video'} alt=""/>
                <Button white={true} value="ЗАПИСАТЬСЯ СЕЙЧАС" classes={'video-btn'}/>
            </section>
            <section id={'section6'} className={'section'}>
                <h1 className='title'>Ход работы</h1>
                <div className="work-box float1">
                    <Describe num='1'
                              text='5 серпня 2004 року у Венесуелі відбувся референдум щодо можливої
                                  дострокової відставки глави держави Уго Чавеса. 17 серпня стало відомо,
                                  що США відмовилися визнавати результати референдуму й закликали розпочати'
                              icon={logo}/>
                    <img src={logo} alt='' className="box-behind"/>
                </div>
                <div className="work-box float0">
                    <Describe num='2'
                              text="2 березня 2006 року одностайним рішенням Національних зборів (парламенту)
                                   Венесуели були ухвалені зміни в державній символіці, запропоновані президентом країни"
                              icon={logo}/>
                    <img src={logo} alt='' className="box-behind"/>
                </div>
                <div className="work-box float1">
                    <Describe num='3'
                              text="Президент Венесуели Уго Чавес, представляючи нову символіку, назвав своє нововведення
                                  «зіркою Болівара»"
                              icon={logo}/>
                    <img src={logo} alt='' className="box-behind"/>
                </div>
            </section>
            <section id={'section7'} className={'section'}>
                <h1 className='white-text white-title title' style={{marginBottom: '20px'}}>Наша команда</h1>
                <div className="row">
                    <div className="col-6 col-md-3 team-memb">
                        <Member name="ИРИНА ОКОЛИТА" position="Главный дизайнер" icon={makaka}/>
                    </div>
                    <div className="col-6 col-md-3 team-memb">
                        <Member name="ИРИНА ОКОЛИТА" position="Главный дизайнер" icon={makaka}/>

                    </div>
                    <div className="col-6 col-md-3 team-memb">
                        <Member name="ИРИНА ОКОЛИТА" position="Главный дизайнер" icon={makaka}/>

                    </div>
                    <div className="col-6 col-md-3 team-memb">
                        <Member name="ИРИНА ОКОЛИТА" position="Главный дизайнер" icon={makaka}/>

                    </div>
                </div>
            </section>
        </div>;
    }
}

export default Design;