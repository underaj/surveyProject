var Survey = require('./survey.model');
require('../seed/survey.seed');

module.exports = {
  get: function(req, res) {
    Survey.getAll(function(surveys) {
      res.send(surveys);
    });
  },
  getOne: function(req, res) {
    var id = req.params.id;
    res.send(surveys[id]);
  },
  post: function(req, res) {
    console.log(req.body);
    Survey.saveNewRest(req.body, function(restaurant) {
      res.status(200).send(restaurant);
    });
  },
  put: function(req, res) {

  },
  deleteOne: function(req, res) {

  },
  upvote: function(req, res) {

  }
};
