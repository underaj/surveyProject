import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="post-title">
        Username
        <input className="signup-input" type="text" onChange={ (event) => this.state.username = event.target.value } />
        Password
        <input className="signup-input" type="text" onChange={ (event) => this.state.password = event.target.value } />
        <button onClick={ () => this.props.signup({title: this.state.title, username: this.state.username})}>
          Post
        </button>
      </div>
    );
  }
}
