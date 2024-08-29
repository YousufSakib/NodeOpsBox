const express = require("express");
const http = require("http");
const app = express();
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", (socket) => {
    console.log("New user Connected");

    socket.on("sendingName", (name) => {
        socket.emit("returnName", "You typed " + name);
    });
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, function () {
    console.log("Server Run @3000");
});
