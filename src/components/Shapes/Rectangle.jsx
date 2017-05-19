import React, { Component } from 'react';

class Rectangle extends Component {

	render() {
		return (
			<g transform='translate(50, 20)'>
				<rect width='100' height='200' />
			</g>
		)
	}
}

export default Rectangle;