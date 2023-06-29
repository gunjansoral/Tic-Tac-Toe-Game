const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
require('dotenv').config();
const { PORT, FRONTEND_URI } = process.env

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: FRONTEND_URI
  }
});

io.on("connection", (socket) => {
  socket.emit('init', { data: 'hello world' });
});

httpServer.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});