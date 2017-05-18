import React, { Component } from 'react';
// import logo from './logo.svg';
import car from '../photos/cars1.jpeg';
import {BarChart, Chart, LineChart} from 'react-d3-basic';
import * as d3 from 'd3';
import ProgressArc from './ProgressArc';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo1: '../photos/cars1.jpeg',
      color: 'green',
      lineColor: 'red',
      garbage: []
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
    let chartData = d3.json('./src/data/garbage.csv', (data) => {
      console.log(data)
    })

    // let chartData = d3.csv("/data/garbage.csv", (data) => {
    //                   // if (error) throw error;
    //                   console.log('data:', data);
                      
    //                   data.forEach((d) => {
    //                     // let garbage = this.state.garbage.slice();
    //                     // garbage.push(d);
    //                     // this.setState({ garbage: garbage })
    //                     console.log(d)
    //                   })
    //                   return data;
    //                 })
    // debugger
        // console.log('this.state', this.state)
        // width = 500,
        // height = 300,
        // margins = {left: 100, right: 100, top: 50, bottom: 50},
        // // chart series,
        // // field: is what field your data want to be selected
        // // name: the name of the field that display in legend
        // // color: what color is the line
        // chartSeries = [
        //   {
        //     field: 'total',
        //     name: 'Total',
        //     color: '#ff7f0e'
        //   }
        // ],
        // // your x accessor
        // x = function(d) {
        //   return parseDate(d.month);
        // },
        // xScale = 'time';

    return (
      <div className='container'>
        <h1>Hello World</h1>
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
      </div>
    );
  }
}

export default App;
