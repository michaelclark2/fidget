import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Clock from '../components/Clock/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
      </div>
    );
  }
}

export default App;
