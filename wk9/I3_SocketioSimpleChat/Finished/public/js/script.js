var socket = io();

$('#message-form').on('submit', sendChat);
socket.on('message', receiveChat);

function receiveChat(message) {
	console.log('New message:');
	console.log(message.text);
  $('.messages').append('<p>' + message.text + '</p>');
};

function sendChat(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
}
