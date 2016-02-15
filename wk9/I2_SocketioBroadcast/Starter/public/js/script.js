var socket = io.connect();

socket.on('date', function(data) {
  $('#date').text(data.date);
});
