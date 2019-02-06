import React, { Component } from 'react';
import './App.css';
import Page from './js/designPage.js'
import Page2 from './js/About.js'

class App extends Component {
  render() {
      return (
      <div className="App">
          <Page/>
      </div>
    );
  }
}

export default App;
