import React, {Component} from 'react';
import '../styles/mainPage.css'
import '../styles/settings.css'
import Button from './Button'
import logo from '../img/bg.jpg'
import makaka from '../img/unicorn.jpg'

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
            <section>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-12 d-flex flex-column justify-content-center align-items-center">
                            <h1 className={'title'}>Наши работы</h1>
                            <div className={'proj-box'}>
                                {[1, 2].map(x =>
                                    <div key={x} className="row">
                                        {[1, 2, 3].map(x =>
                                            <div key={x} className="col-sm-4" style={no_pad}>
                                                <img src={logo} alt="" className={'proj-img'}/>
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
                                    <img src={logo} alt="" className='img-fluid mb-5'/>
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
                            /*remove next 7 lines*/
                            <div className="row">
                                {[1, 2, 3, 4].map(x =>
                                    <div key={x} className="col-6 col-md-3 team-memb">
                                        <Member name="ИРИНА ОКОЛИТА" position="Главный дизайнер" icon={makaka}/>
                                    </div>
                                )}
                            </div>
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

export default Design;