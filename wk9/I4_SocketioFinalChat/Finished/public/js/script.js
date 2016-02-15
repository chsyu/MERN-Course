// SOCKETIO SETUP
var socket = io();
socket.on('message', receiveChat);

// REGISTER DOM ELEMENTS
var $messageField = $('#messageInput');
var $nameField = $('#nameInput');
var $messageList = $('#example-messages');

// PUSH TO SERVER
$messageField.keypress(function (e) {
  if (e.keyCode == 13) {
    //FIELD VALUES
    var username = $nameField.val();
    var message = $messageField.val();

    //PUSH DATA TO SERVER AND EMPTY FIELD
		socket.emit('message', {
			name:username,
			text:message
		});
    $messageField.val('');
  }
});

// RECEIVE FROM SERVER
function receiveChat(data) {
	var username = data.name || "anonymous";
  var message = data.text;

	//CREATE ELEMENTS MESSAGE & SANITIZE TEXT
  var $messageElement = $("<li>");
  var $nameElement = $("<strong class='example-chat-username'></strong>");
  $nameElement.text(username);
  $messageElement.text(message).prepend($nameElement);

  //ADD MESSAGE
  $messageList.append($messageElement)

  //SCROLL TO BOTTOM OF MESSAGE LIST
  $messageList[0].scrollTop = $messageList[0].scrollHeight;

};
