import React from 'react';

export default class SurveyListEntry extends React.Component {
  render () {
    return (
      <div className="survey">
        <h5>{this.props.survey.title}</h5>
        <p>{this.props.survey.create}</p>
        <p>{this.props.survey.votes}</p>
      </div>
    )
  }
}
