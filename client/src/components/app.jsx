import React from 'react';
import { SurveyList } from './surveyList.jsx';
import PostSurveyForm from './postSurveyForm.jsx';
import SignUpForm from './signup.jsx';
import SignInForm from './signin.jsx';


var dummyList = [
 {
   title: '',
   create: '',
   votes: ''
 }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: dummyList,
      user: ''
    };
  }
  
  componentDidMount() {
    this.getUserDetail();
    this.getSurveyList();
    // get username from server
  }

  getSurveyList() {
    this.props.apiGet('/api/surveys', newSurveyList => {
      this.setState({
        surveys: newSurveyList
      });
    });
  }

  getUserDetail() {
    this.props.apiGet('/api/users/getUserDetail', userDetail => {
      this.setState({
        user: userDetail.username
      });
    });
  }

  postSurvey(postObj) {
    postObj.username = postObj.username || 'ANON';
    this.props.apiPost('/api/surveys', postObj)
      .done((err, data) => {
        this.getSurveyList();
      });
  }

  upVote(title) {
    this.props.apiPost('/api/surveys/upvote', title)
      .done((err, data) => {
        this.getSurveyList();
      });
  }

  signin(userObj) {
    this.props.apiPost('/api/users/signin', userObj)
      .done(userObj => {
        this.setState({user: userObj.username});
      });
  }

  signup(userObj) {
    this.props.apiPost('/api/users/signup', userObj)
      .done(userObj => {
        this.setState({user: userObj.username});
      });
  }

  render () {
    return (
      <div>
        <h2>Whats for lunch?</h2>
        <h5>{this.state.user}</h5>
        <div>
          <a href='/signin'>Sign in here</a>
        </div>
        <div>
          <a href='/api/users/signout'>Sign Out</a>
        </div>
        <div>
          <button onClick={() => this.getUserDetail()}>Get User Detail</button>
        </div>
        Sign In Form
        <SignInForm signin={this.signin.bind(this)} />
        Sign Up Form
        <SignUpForm signup={this.signup.bind(this)} />
        Post New Restaurant
        <PostSurveyForm postSurvey={this.postSurvey.bind(this)} user={this.state.user} />
        <SurveyList upVote={this.upVote.bind(this)} surveys={this.state.surveys} /> 
      </div>
    )
  }
}
