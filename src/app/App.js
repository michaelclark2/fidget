import React, { Component } from 'react';
import './App.scss';
import Clock from '../components/Clock/Clock';
import Quote from '../components/Quote/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Quote />
      </div>
    );
  }
}

export default App;
