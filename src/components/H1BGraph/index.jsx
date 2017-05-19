import React, { Component } from 'react';
import * as d3 from 'd3';

class H1BGraph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rawData: []
		};
	}

	componentWillMount() {
		this.loadRawData();
	}

	loadRawData() {
		// debugger;
		console.log('d3 exists:', d3)
		let dateFormat = d3.timeFormat("%m/%d/%Y");

		d3.csv('../../public/data/h1bs.csv')
			.row((d) => {
				if (!d['base salary']) {
					return null;
				}

				return {
					employer: d.employer,
					submit_date: dateFormat.parse(d['submit date']),
					start_date: dateFormat.parse(d['start date']),
					case_status: d['case status'],
					job_title: d['job title'],
					clean_job_title: this.cleanJobs(d['job title']),
					base_salary: Number(d['base salary']),
					salary_to: d['salary to'] ? Number(d['salary to']) : null,
					city: d.city,
					state: d.state
				};
			})
			.get((error, rows) => {
				if (error) {
					console.error(error);
					console.error(error.stack);
				} else {
					this.setState({rawData: rows});
				}
			})
	}

	render() {
		if (!this.state.rawData.length) {
			return (
				<h2>Loading data about 81,000 H1B visas in the software industry</h2>
			);
		}

		return (
			<div>
				<svg>
				</svg>
			</div>
		)
	}
}

export default H1BGraph;