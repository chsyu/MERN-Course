var express = require('express');
var app = express();
var routes = require('./routers/index');

var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port);
