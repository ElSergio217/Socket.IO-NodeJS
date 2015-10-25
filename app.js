var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	var port=Number(process.env.PORT||3000)
server.listen(port);

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
	    io.sockets.emit('new message', data);
	    console.log("Connected");
	});
});