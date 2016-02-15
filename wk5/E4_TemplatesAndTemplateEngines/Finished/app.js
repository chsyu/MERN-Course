var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

var htmlData =
{
	title: 'Cleaning Supplies',
	supplies:
		['mop','broom','duster']
}

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/page', function(req, res) {
	res.render('page', htmlData);
});


app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
