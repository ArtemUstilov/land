import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery'
import {LocalizeProvider} from "react-localize-redux";
import {
    BrowserRouter as Router,
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
import {Cube} from "react-preloaders";
class MyRouter extends Router {
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
    componentDidMount() {
    }
}

MyRouter = withLocalize(MyRouter);
ReactDOM.render(
    <React.Fragment>
        <Cube
            color={'white'} //Default #2D2D2D
            z-index={'1000'}
            bgColor={'black'} //Default #F7F7F7
            time={2000} //Default #1300
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
