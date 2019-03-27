import React, { Component } from 'react';
import './App.scss';
import Clock from '../components/Clock/Clock';
import Quote from '../components/Quote/Quote';
import Weather from '../components/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Quote />
        <Weather />
      </div>
    );
  }
}

export default App;
