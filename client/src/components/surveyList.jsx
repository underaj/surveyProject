import React from 'react';
import SurveyListEntry from './surveyListEntry.jsx';

export default class SurveyList extends React.Component {
  render () {
    return (
      <div className="survey-list">
        {this.props.surveys.map( (survey) => (<SurveyListEntry survey={survey} /> ))}
      </div>
    )
  }
}
