var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema({
  title: {type: String, required: true},
  creator: {type: String, required: true},
  votes: {type: Number, default: 0}
});

surveySchema.set('timestamps', true);

var Survey = mongoose.model('Survey', surveySchema);
