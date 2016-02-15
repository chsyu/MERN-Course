var PORT 		= process.env.PORT || 3000,
		path    = require('path'),
 		express = require('express'),
 		app 		= express(),
 		http 		= require('http').Server(app);

// static file setup
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

http.listen(PORT, function () {
	console.log('Server started!');
});
