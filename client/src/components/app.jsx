import React from 'react';
import SurveyList from './surveyList.jsx';
import getSurveyList from '../helper.js';

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
    getSurveyList(newSurveyList => {
      this.setState({
        surveyList: newSurveyList
      })
    });
  }

  // getSurveyList() {
  // }

  render () {
    return (
      <div>
        <h2>Whats for lunch?</h2>
        <SurveyList surveys={this.state.surveys}/>
      </div>
    )
  }
}