import React, {Component} from 'react';
import './App.css';
import MainPage from './js/mainPage.js'
import About from './js/About.js'
import Portfolio from './js/Portfolio.js'
import Footer from './js/Footer.js'
import Contacts from './js/Contacts.js'
import Services from './js/Services.js'
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import LanguageToggle from "./js/LanguageToggle.js";
class App extends Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: "Русский", code: "ru" },
                { name: "Українська", code: "ua" }
            ],
            options: { renderToStaticMarkup}
        });
    }
    render() {
        return (
                <div className="App">
                    <Contacts/>
                </div>
        );
    }
}

export default withLocalize(App);
