var express = require('express');
var router = express.Router();
var SurveyCtrl = require('../survey/survey.controller');

router.get('/surveys', SurveyCtrl.get);
router.get('/surveys/:id', SurveyCtrl.getOne);
router.post('/surveys', SurveyCtrl.post);
router.put('/surveys/:id', SurveyCtrl.put);
router.delete('/surveys/:id', SurveyCtrl.deleteOne);
router.post('/surveys/upvote', SurveyCtrl.upvote);

module.exports = router;
