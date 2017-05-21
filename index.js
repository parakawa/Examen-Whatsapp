var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

var messages = [];

app.use(express.static('public'));

io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('mesaggeRender', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('mesaggeRender', messages);
  });
});

server.listen(8080, function() {  
  console.log("Servidor corriendo en http://localhost:8080");
});