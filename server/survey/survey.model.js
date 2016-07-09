var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema({
  title: {type: String, required: true},
  creator: {type: String, required: true},
  votes: {type: Number, default: 0}
});

surveySchema.set('timestamps', true);

var Survey = mongoose.model('Survey', surveySchema);

module.exports.Survey = Survey;

module.exports.getAll = function(cb) {
  Survey.find().exec()
  .then(function(surveys) {
    cb(surveys);
  });
};

module.exports.saveNewRest = function(postObj, cb) {
  var title = postObj.title;
  var creator = postObj.username;
  Survey.findOne( {title: title} )
    .exec(function(err, result) { 
      if (err) {
        console.log(err); 
      } else if (result) {
        cb(result);
      } else {
        var survey = new Survey( {title: title, creator: creator} );
        survey.save(function(err, result) {
          if (err) {
            console.log(err);
          }
          cb(result);
        });
      }
    });
};


