import React from 'react';
import { SurveyList } from './surveyList.jsx';
import PostSurveyForm from './search.jsx';

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
    console.log(this.props.postSurvey);
  }
  
  componentDidMount() {
    this.props.getSurveyList(newSurveyList => {
      console.log(newSurveyList);
      this.setState({
        surveys: newSurveyList
      })
      console.log();
    });
  }

  // getSurveyList() {
  // }

  render () {
    return (
      <div>
        <h2>Whats for lunch?</h2>
        <PostSurveyForm postSurvey={this.props.postSurvey}/>
        <SurveyList surveys={this.state.surveys} />
      </div>
    )
  }
}