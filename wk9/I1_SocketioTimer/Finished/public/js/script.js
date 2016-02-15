var socket = io();

socket.on('connect',function(){
  console.log('Connect to socket.io server');
});

socket.on('date', function(data) {
  $('#date').text(data.date);
});
