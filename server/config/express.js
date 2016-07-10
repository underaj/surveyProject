var bodyParser = require('body-parser');
var morgan = require('morgan');
var session = require('express-session');
var passport = require('passport');

require('../auth/passport');

module.exports = {
  setup: function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(session({ secret: 'AJ is cool..?' }));
    app.use(passport.initialize());
    app.use(passport.session());
  },
  passport: passport
};
