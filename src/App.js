import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Container">
          <div className="Top"></div>
          <div className="Left"></div>
          <div className="Right"></div>
          <div className="Bottom"></div>
        </div>
      </div>
    );
  }
}

export default App;
