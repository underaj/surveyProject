import React from 'react';
import { SurveyListEntry } from './surveyListEntry.jsx';

export const SurveyList = (props) => (
  <div className="survey-list">
    {props.surveys.map( (survey) => (<SurveyListEntry survey={survey} upVote={props.upVote}/> ))}
  </div>
);
