import React from 'react';

export default class SignInForm extends React.Component {
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
        <input className="signin-input" type="text" onChange={ (event) => this.state.username = event.target.value } />
        Password
        <input className="signin-input" type="text" onChange={ (event) => this.state.password = event.target.value } />
        <button onClick={ () => this.props.signin({username: this.state.username, password: this.state.password})}>
          Sign in
        </button>
      </div>
    );
  }
}
