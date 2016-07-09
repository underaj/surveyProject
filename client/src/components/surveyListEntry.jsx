import React from 'react';

export const SurveyListEntry = (props) => (
  <div>
    <h3>{props.survey.title}</h3>
    <p>{props.survey.creator}</p>
    <p>{props.survey.votes}</p>
    <button onClick={() => props.upVote({title: props.survey.title})}>Upvote</button>
  </div>
);
