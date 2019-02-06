import React, { Component } from 'react';
import './App.css';
import mainPage from './js/mainPage.js'
import About from './js/About.js'
import Portfolio from './js/Portfolio.js'
import Footer from './js/Footer.js'

class App extends Component {
  render() {
      return (
      <div className="App">
          <Footer/>
      </div>
    );
  }
}

export default App;
