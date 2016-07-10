import React from 'react';
import { SurveyList } from './surveyList.jsx';
import PostSurveyForm from './postSurveyForm.jsx';

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
      user: 'anonymous'
    };
  }
  
  componentDidMount() {
    this.signup({username:'underaj100', password:'1234'});

    this.getSurveyList();
    // get username from server
  }

  getSurveyList() {
    this.props.getSurveyList(newSurveyList => {
      this.setState({
        surveys: newSurveyList
      });
    });
  }

  postSurvey(postObj) {
    this.props.post('/api/surveys', postObj)
      .done((err, data) => {
        this.getSurveyList();
      });
  }

  upVote(title) {
    this.props.post('/api/surveys/upvote', title)
      .done((err, data) => {
        this.getSurveyList();
      });
  }

  signup(userObj) {
    this.props.post('/api/users/signup', userObj)
      .done(userObj => {
        this.setState({user: userObj.username});
      });
  }

  render () {
    return (
      <div>
        <h2>Whats for lunch?</h2>
        <h5>{this.state.user}</h5>
        <a href='/signin'>Sign in here</a>
        <PostSurveyForm postSurvey={this.postSurvey.bind(this)} user={this.state.user} />
        <SurveyList upVote={this.upVote.bind(this)} surveys={this.state.surveys} /> 
      </div>
    )
  }
}
