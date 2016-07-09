import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { getSurveyList, postSurvey } from './helper.js';

ReactDOM.render(<App getSurveyList={getSurveyList} postSurvey={postSurvey}/>, document.getElementById('container'));
