var $ = require('jquery');

export var getSurveyList = function getSurveyList (callback) {
  var jqXHR = $.get('http://localhost:3000/api/surveys');
  jqXHR.done(data => callback(data));
};

export var post = function post (path, postObj) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000' + path,
    data: JSON.stringify(postObj),
    contentType: 'application/json'
  });
};



