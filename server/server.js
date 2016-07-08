var express = require('express');

var app = express();

require('./config/express')(app);

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../compiled'));
require('./config/routes')(app);

app.listen(3000, function() {
  console.log('Listening on localhost:3000...');
});
