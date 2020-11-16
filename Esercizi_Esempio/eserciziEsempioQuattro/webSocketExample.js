//dependencies
//npm install express socket.io @types/socket.io --save
//starts with
//node webSocketExpress.js
const express = require('express')
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;


io.on('connection', (socket) => {
  console.log('user connected');
	socket.on('message', (message) => {
	  socket.emit('newMessage', message);
	});
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
