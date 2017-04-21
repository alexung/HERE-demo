import React, { Component } from 'react';
// import logo from './logo.svg';
import car from '../photos/cars1.jpeg';
import Konva from 'konva';
import {Layer, Rect, Stage, Group} from 'react-konva';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo1: '../photos/cars1.jpeg',
      color: 'green'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Hello World</h1>
        <img src={car} alt='awesome' className='annotate-image' />
        <Stage width={700} height={700}>
          <Layer>
            <Rect
                x={10} y={10} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
