import React, { Component } from 'react';
import './App.css';
import LeftComponent from './components/left/left'
import RightComponent from './components/right/right'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftComponent></LeftComponent>
        <RightComponent></RightComponent>
      </div>
    );
  }
}

export default App;
