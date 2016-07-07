var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
};
