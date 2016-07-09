import React from 'react';

export default class PostSurveyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      username: ''
    }
  }

  render() {
    return (
      <div className="search">
        Restaurant name
        <input className="search-input" type="text" onChange={ (event) => this.state.restaurant = event.target.value } />
        Username
        <input className="search-input" type="text" onChange={ (event) => this.state.username = event.target.value } />
        <button onClick={ () => this.props.postSurvey({restaurant: this.state.restaurant, username: this.state.username})}>
          Post
        </button>
      </div>
    );
  }
}