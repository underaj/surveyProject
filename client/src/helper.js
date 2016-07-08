var $ = require('jquery');

export default function getSurveyList (callback) {
  var jqXHR = $.get('https://localhost:3000/api/surveys', options);
  jqXHR.done(data => callback(data));
};

