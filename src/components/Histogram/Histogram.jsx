import React, { Component } from 'react';
import * as d3 from 'd3';
import Axis from './Axis';
import './style.less';

class HistogramBar extends Component {
	render() {		
		let translate = `translate(${this.props.x}, ${this.props.y + this.props.height})`,
				label = this.props.percent.toFixed(0) + '%',
				height = 20;

		// console.log('this.props.x:', this.props.x, ', this.props.y:', this.props.y)
		
		if (this.props.percent < 1) {
			label = this.props.percent.toFixed(2) + '%';
		}

		if (this.props.width < 20) {
			label = label.replace('%', '');
		}

		if (this.props.width < 10) {
			label = '';
		}

		return (
			<g transform={translate} 
				 className='bar' >
				<rect className='actual'
							width={this.props.width}
							height={20}
							transform={'translate(0, 1)'} />
				<text textAnchor='end'
							x={this.props.width}
							y={height/2 + 5}>
							{label}
				</text>
			</g>
		)
	}
}

class Histogram extends Component {
	constructor(props) {
		super();

		this.histogram = d3.histogram();
		this.widthScale = d3.scaleLinear();
		this.yScale = d3.scaleLinear();
		console.log('props:', props)
		this.update_d3(props);
	}

	componentWillReceiveProps(newProps) {
		this.update_d3(newProps);
	}

	update_d3(props) {
		this.histogram
				.thresholds(props.bins)
				.value(props.value);
				// console.log('props.bins:', props.bins);
        let bars = this.histogram(props.data),
            counts = bars.map((d) => d.length);
        console.log('bars:', bars)
        console.log('counts:', counts)
        // debugger
        this.widthScale
            .domain([d3.min(counts), d3.max(counts)])
            .range([9, props.width-props.axisMargin]);

        this.yScale
            .domain([0, d3.max(bars.map((d) => d.x0+d.x1))])
            .range([0, props.height-props.topMargin-props.bottomMargin]);
	}

	makeBar(bar, index) {
		let percent = bar.length/this.props.data.length * 100;

		// debugger
		let props = {
			percent: percent,
			x: this.props.axisMargin,
			y: this.yScale(bar.x0 + index),
			width: this.widthScale(bar.length),
			height: this.yScale(bar.x1),
			key: 'histogram-bar-' + bar.x0 + '-' + bar.length,
			index: index
		}

		return (
			<HistogramBar {...props} />
		)
	}

	render() {
		let translate = `translate(0, ${this.props.topMargin})`,
				bars = this.histogram(this.props.data);

		return (
			<g className='histogram' transform={translate}>
				<g className='bars'>
					{bars.map(::this.makeBar)}
				</g>
				<Axis {...this.props} data={bars}  />
			</g>
		);
	}
}

export default Histogram;