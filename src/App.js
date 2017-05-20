import React, { Component } from 'react';
// import logo from './logo.svg';
import car from '../photos/cars1.jpeg';
// import {BarChart, Chart, LineChart} from 'react-d3-basic';
import * as d3 from 'd3';
import ProgressArc from './components/Shapes/ProgressArc';
import Rectangle from './components/Shapes/Rectangle';
import H1BGraph from './components/H1BGraph/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo1: '../photos/cars1.jpeg',
      color: 'green',
      lineColor: 'red',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
  }

  handleClick() {
    // this.setState({ color: Konva.Util.getRandomColor() });
  }

  handleLineClick() {
    // this.setState({ lineColor: Konva.Util.getRandomColor() })
  }

  render() {
    return (
      <div className='container'>
        <H1BGraph url="data/h1bs.csv" />
        <h1>Really World</h1>
        <img src={car} alt='awesome' className='annotate-image' />
        <ProgressArc
          height={300}
          width={300}
          innerRadius={100}
          outerRadius={110}
          id="d3-arc"
          backgroundColor="#e6e6e6"
          foregroundColor="#00ff00"
          percentComplete={0.3}
        />
        <svg>
          <Rectangle />   
        </svg>
      </div>
    );
  }
}

export default App;
