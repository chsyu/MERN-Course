var	port    = process.env.PORT || 3000,
	path    = require('path'),
 	express = require('express'),
 	app 	= express(),
 	http 	= require('http').Server(app),
	nickname = {},
	name = {},
	guestnumber = 0,
	io	= require('socket.io')(http);

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
	nickname[socket.id]=`Guest${guestnumber}`;
	guestnumber++;
	console.log(`User ${nickname[socket.id]} connected via socket.io`);
	socket.on('message', function (message) {
		name[socket.id]=message.name || "anonymous";
		console.log('Message received: ' + message.name+": "+message.text);
		io.emit('message', message);
	});
	socket.on('disconnect', function(){
		console.log(`User ${name[socket.id]}(${nickname[socket.id]}) disconnected!`);
	});
});

http.listen(port, function() {
	console.log('Server started!');
});
