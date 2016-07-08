import React from 'react';

export const SurveyListEntry = (props) => (
  <div>
    <h3>{props.survey.title}</h3>
    <p>{props.survey.create}</p>
    <p>{props.survey.votes}</p>
  </div>
);
