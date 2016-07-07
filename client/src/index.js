import React from 'react';
import ReactDOM from 'react-dom';

// var $ = require("jquery");
/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
// import './styles/main.scss';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */

// // import { App } from './components/app';
var App = require('./components/app.jsx');
console.log(App);
console.log('wt');
ReactDOM.render(<App/>, document.getElementById('container'));