const express = require("express");
const http = require("http");
const app = express();
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
    io.sockets.emit("myBroadCast", "Good Evening");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, function () {
    console.log("Server Run @3000");
});
