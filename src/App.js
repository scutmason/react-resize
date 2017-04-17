import React, { Component } from 'react';
import logo from './logo.svg';
import Resize from './resize';
import './App.css';

const Contianer = ({ connect }) => {

  return <div className="Container">
    {connect(<div className="Top">123</div>, { left: '' })}
    <div className="Left"></div>
    <div className="Right"></div>
    <div className="Bottom"></div>
  </div>
}
class App extends Component {
  handleResize = console.log

  render() {
    const ResizeCom = Resize(this.handleResize)(Contianer)
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
        <ResizeCom />
      </div>
    );
  }
}




export default App;
