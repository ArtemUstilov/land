import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Preloader.css'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import {LocalizeProvider} from "react-localize-redux";
import {
    Route,
    Switch
} from 'react-router-dom';
import MainPage from './js/mainPage.js'
import About from './js/About.js'
import Portfolio from './js/Portfolio.js'
import Footer from './js/Footer.js'
import Navbar from './js/Navbar.js'
import Contacts from './js/Contacts.js'
import Services from './js/Services.js'
import {renderToStaticMarkup} from "react-dom/server";
import {withLocalize} from "react-localize-redux/lib/index";
import "animate.css/animate.min.css";
import {Dots} from "react-preloaders";
class MyRouter extends HashRouter {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                {name: "Русский", code: "ru"},
                {name: "Українська", code: "ua"}
            ],
            options: {renderToStaticMarkup}
        });
    }
    render(){
      return super.render();

    }
}

MyRouter = withLocalize(MyRouter);
ReactDOM.render(
    <React.Fragment>
        <Dots
            className={'preloader'}
            id={'preloader'}
            color={'#3c9253'} //Default #2D2D2D
            z-index={'1000'}
            bgColor={'white'}
            time={0}//Default #F7F7F7
        />
    <MyRouter>
        <LocalizeProvider>
        <Navbar/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/about' component={About}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/services' component={Services}/>
                <Route path='/contacts' component={Contacts}/>
            </Switch>
            <Footer/>
    </LocalizeProvider>
</MyRouter>
    </React.Fragment>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
