import React from 'react';

export default class PostSurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      username: ''
    }
  }

  render() {
    return (
      <div className="post-title">
        Restaurant name
        <input className="search-input" type="text" onChange={ (event) => this.state.title = event.target.value } />
        Username
        <input className="search-input" type="text" onChange={ (event) => this.state.username = event.target.value } />
        <button onClick={ () => this.props.postSurvey({title: this.state.title, username: this.state.username})}>
          Post
        </button>
      </div>
    );
  }
}
