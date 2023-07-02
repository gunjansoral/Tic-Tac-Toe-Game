const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');
require('dotenv').config();

const { PORT, FRONTEND_URI } = process.env

const app = express();
const server = createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {
    origin:
      // FRONTEND_URI ||
      'http://127.0.0.1:5501'
  }
});

io.on("connection", (socket) => {
  socket.emit('init', { data: 'hello world' });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});