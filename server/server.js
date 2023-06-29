const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  socket.emit('init', { data: 'hello world' });
});

const PORT = 8000;
httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});