import React from 'react';

export default class PostSurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <div className="post-title">
        Restaurant name
        <input className="search-input" type="text" onChange={ (event) => this.state.title = event.target.value } />
        <button onClick={ () => this.props.postSurvey({title: this.state.title, username: this.props.user})}>
          Post
        </button>
      </div>
    );
  }
}
