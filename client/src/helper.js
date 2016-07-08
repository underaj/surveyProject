var $ = require('jquery');

export default function getSurveyList (callback) {
  var jqXHR = $.get('http://localhost:3000/api/surveys');
  jqXHR.done(data => callback(data));
};

