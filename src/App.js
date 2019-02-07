import React, { Component } from 'react';
import './App.css';
import MainPage from './js/mainPage.js'
import About from './js/About.js'
import Portfolio from './js/Portfolio.js'
import Footer from './js/Footer.js'
import Contacts from './js/Contacts.js'

class App extends Component {
  render() {
      return (
      <div className="App">
          <Contacts/>
      </div>
    );
  }
}

export default App;
