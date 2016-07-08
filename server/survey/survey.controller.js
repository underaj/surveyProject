var surveys = [

 {
   title: 'Restauruant A',
   create: 'Person A',
   votes: 5
 },
 {
   title: 'Restauruant B',
   create: 'Person B',
   votes: 4
 },
 {
   title: 'Restauruant C',
   create: 'Person C',
   votes: 3
 },
 {
   title: 'Restauruant D',
   create: 'Person D',
   votes: 2
 },

];

var Survey = require('./survey.model');

module.exports = {
  get: function(req, res) {
    res.send(surveys);
  },
  getOne: function(req, res) {
    var id = req.params.id;
    res.send(surveys[id]);
  },
  post: function(req, res) {

  },
  put: function(req, res) {

  },
  deleteOne: function(req, res) {

  },
  upvote: function(req, res) {

  }
};
