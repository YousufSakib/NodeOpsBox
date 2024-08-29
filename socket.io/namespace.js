const express = require("express");
const http = require("http");
const app = express();
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

let buyNsp = io.of("/buy");
buyNsp.on("connection", () => {
    buyNsp.emit("MyEvent", "helloBuy");
});

let sellNsp = io.of("/sell");
sellNsp.on("connection", () => {
    sellNsp.emit("MyEvent", "helloSell");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, function () {
    console.log("Server Run @3000");
});
