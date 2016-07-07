var SurveyCtrl = require('../survey/survey.controller');

module.exports = function(app) {

  app.get('/api/surveys', SurveyCtrl.get);
  app.get('/api/surveys/:id', SurveyCtrl.getOne);
  app.post('/api/surveys', SurveyCtrl.post);
  app.put('/api/surveys/:id', SurveyCtrl.put);
  app.delete('/api/surveys/:id', SurveyCtrl.deleteOne);
  app.post('/api/surveys/:id/upvote', SurveyCtrl.upvote);

};
