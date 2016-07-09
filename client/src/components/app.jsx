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
      surveys: dummyList
    };
  }
  
  componentDidMount() {
    this.getSurveyList();
  }

  getSurveyList() {
    this.props.getSurveyList(newSurveyList => {
      this.setState({
        surveys: newSurveyList
      });
    });
  }

  postSurvey(postObj) {
    this.props.postSurvey(postObj)
      .done((err, data) => {
        this.getSurveyList();
      });
  }

  upVote(title) {
    this.props.upVote(title)
      .done((err, data) => {
        this.getSurveyList();
      });
  }

  render () {
    return (
      <div>
        <h2>Whats for lunch?</h2>
        <PostSurveyForm postSurvey={this.postSurvey.bind(this)}/>
        <SurveyList surveys={this.state.surveys} upVote={this.upVote.bind(this)}/>
      </div>
    )
  }
}
