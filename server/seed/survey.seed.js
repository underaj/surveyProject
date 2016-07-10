var Survey = require('../survey/survey.model').Survey;

Survey.find().exec()
  .then(function(surveys) {
    if (surveys.length === 0) {
      Survey.create({title: 'Restaurant A', creator: 'Person A'});
      Survey.create({title: 'Restaurant B', creator: 'Person B'});
      Survey.create({title: 'Restaurant C', creator: 'Person C'});
    }
  });
