import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { getSurveyList, post } from './helper.js';

ReactDOM.render(<App getSurveyList={getSurveyList} post={post} />, document.getElementById('container'));
