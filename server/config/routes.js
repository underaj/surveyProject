var express = require('express');
var passport = require('./express').passport;
var router = express.Router();
var SurveyCtrl = require('../survey/survey.controller');
var UserCtrl = require('../user/user.controller');

// Survey Routes
router.get('/surveys', SurveyCtrl.get);
router.get('/surveys/:id', SurveyCtrl.getOne);
router.post('/surveys', SurveyCtrl.post);
router.post('/surveys/upvote', SurveyCtrl.upvote);
// router.put('/surveys/:id', SurveyCtrl.put);
// router.delete('/surveys/:id', SurveyCtrl.deleteOne);

// User Routes
router.post('/users/signup', UserCtrl.signup);
router.get('/users/signout', UserCtrl.signout);
router.get('/users/getUserDetail', UserCtrl.getUserDetail);
// router.post('/api/users/signin', UserCtrl.signin);

module.exports = router;
