import React, { Component } from 'react';
// import logo from './logo.svg';
import car from '../photos/cars1.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo1: '../photos/cars1.jpeg'
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Hello World</h1>
        <img src={car} alt='awesome' className='annotate-image' />
      </div>
    );
  }
}

export default App;
