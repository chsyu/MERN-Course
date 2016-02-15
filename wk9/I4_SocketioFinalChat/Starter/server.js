var	port    = process.env.PORT || 3000,
		path    = require('path'),
 		express = require('express'),
 		app 		= express(),
 		http 		= require('http').Server(app),
		io			= require('socket.io')(http);

// static file setup
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');
// router setup
app.get('/', function(req, res) {
	res.render('index');
});
// when user connected
io.on('connection', function(socket){
	console.log('User connected via socket.io');
	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);
		io.emit('message', message);
	});
});

http.listen(port, function() {
	console.log('Server started!');
});
