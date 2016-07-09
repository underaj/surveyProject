import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { getSurveyList, postSurvey, upVote } from './helper.js';

ReactDOM.render(<App getSurveyList={getSurveyList} postSurvey={postSurvey} upVote={upVote} />, document.getElementById('container'));
