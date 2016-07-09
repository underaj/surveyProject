import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { getSurveyList, postSurvey } from './helper.js';
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
ReactDOM.render(<App getSurveyList={getSurveyList} postSurvey={postSurvey}/>, document.getElementById('container'));
