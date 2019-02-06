import React, {Component} from 'react';
import logo from '../img/bg.jpg';
import '../styles/About.css'
import classNames from 'classnames'


class About extends Component {
    render() {
        let classes = classNames({
            'box': true,
        })
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
                            <p>Венесуела — країна гір, рівнин і лісів. Основні природні райони: гірська область Анд,
                                западина Маракайбо, Льянос і Гвіанське плоскогір'я. Гори Анди й озеро Маракайбо на
                                північному-заході, рівнини в центрі, дельта річки Оріноко на сході, Гаянська височина на
                                південному-сході.</p>
                            <p>Густа річкова мережа Венесуели має вкрай нерівномірні витрати впродовж року і бурхливі
                                літні
                                повені. Велика частина території належить басейну Оріноко, яка практично на всій своїй
                                течії
                                в межах Венесуели приймає численні притоки. Ліві притоки (Апуре, Араука, Капанапара)
                                мають
                                рівнинний характер течії з можливістю судноплавства.</p>
                            <br/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center advantages">
                        <div className="col-md-8 col-xs-12">
                            <div className="row">
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 adv-cell">
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid adv-img" src={logo}/>
                                        </div>
                                        <div className="col-6 advantage">
                                            <span className="advantage-text">Примущество</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-xs-12">
                            <p>На півдні країни існує таке рідкісне явище, як біфуркація річок: від Оріноко у верхній
                                течії відгалужується річка Касік'яре, що несе свої води в Ріу-Негру, притоку Амазонки.
                                </p>
                            <p>На півдні країни існує таке рідкісне явище, як біфуркація річок: від Оріноко у верхній
                                течії відгалужується річка Касік'яре, що несе свої води в Ріу-Негру, притоку Амазонки.
                            </p>
                            <ul>
                                <li>
Что-то
                                </li>
                                <li>
                                    Что-то
                                </li>
                                <li>
                                    Что-то
                                </li>
                                <li>
                                    Что-то
                                </li>
                            </ul>
                            <p>На півдні країни існує таке рідкісне явище, як біфуркація річок: від Оріноко у верхній
                                течії відгалужується річка Касік'яре, що несе свої води в Ріу-Негру, притоку Амазонки.
                            </p>
                            <blockquote className="my-blockquote">На півдні країни існує таке рідкісне явище, як біфуркація річок: від Оріноко у верхній
                                течії відгалужується річка Касік'яре, що несе свої води в Ріу-Негру, притоку Амазонки.
                            </blockquote>

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default About;
