var socket = io();

socket.on('date', function(data) {
  $('#date').text(data.date);
});

socket.on('message', function (message) {
	console.log('New message:');
	console.log(message.text);
});
