var $ = require('jquery');

export var getSurveyList = function getSurveyList (callback) {
  var jqXHR = $.get('http://localhost:3000/api/surveys');
  jqXHR.done(data => callback(data));
};

export var postSurvey = function postSurvey (postObj) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/surveys',
    data: JSON.stringify(postObj),
    contentType: 'application/json'
  });
};

