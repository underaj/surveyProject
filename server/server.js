var express = require('express');
var app = express();
var apiRoutes = require('./config/routes');

require('./config/mongoose')();
require('./config/express')(app);

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../compiled'));
app.use('/api', apiRoutes);

app.listen(3000, function() {
  console.log('Listening on localhost:3000...');
});

module.exports = app;
