var express = require("express");

var app = express();
var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {
    console.log("callback");
    connections.push(socket);
    console.log("connected: %s sockets connected", connections.length);
});

console.log("server is runnin on port 3000");