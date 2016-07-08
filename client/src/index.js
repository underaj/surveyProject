import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
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
ReactDOM.render(<App/>, document.getElementById('container'));