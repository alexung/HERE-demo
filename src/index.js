import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function () {
	return this.charAt(0).toLowerCase() + this.slice(1);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
