import React, { Component } from 'react';
// import logo from './logo.svg';
import car from '../photos/cars1.jpeg';
import Konva from 'konva';
import {Layer, Rect, Stage, Line, Circle} from 'react-konva';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo1: '../photos/cars1.jpeg',
      color: 'green',
      lineColor: 'red'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
  }

  handleClick() {
    this.setState({ color: Konva.Util.getRandomColor() });
  }

  handleLineClick() {
    this.setState({ lineColor: Konva.Util.getRandomColor() })
  }

  render() {

    return (
      <div className='container'>
        <h1>Hello World</h1>
        <img src={car} alt='awesome' className='annotate-image' />
        <Stage width={700} height={700}>
          <Layer>
            <Rect
              x={10} 
              y={10} 
              width={50} 
              height={50}
              fill={this.state.color}
              shadowBlur={10}
              onClick={this.handleClick}
            />
            <Line
              points={[5, 70, 140, 23, 250, 60, 300, 20]}
              stroke={this.state.lineColor}
              strokeWidth={15}
              lineCap={'round'}
              lineJoin={'round'}
              onClick={this.handleLineClick}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
