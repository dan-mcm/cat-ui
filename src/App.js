import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './Components/Cat.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cat/>
      </div>
    );
  }
}

export default App;
