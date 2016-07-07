var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app) {
  app.use(express.static(__dirname + '/../client'));
  app.use(express.static(__dirname + '/../compiled'));
  app.use(morgan('dev'));
  app.use(bodyParser.json());
};
