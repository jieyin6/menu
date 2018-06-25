import React, { Component } from 'react';
import logo from './logo-ant.svg';
import './App.css';
import {Button} from 'antd'
import LeftComponent from './components/left'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftComponent></LeftComponent>
      </div>
    );
  }
}

export default App;
