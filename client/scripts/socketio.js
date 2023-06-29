// two players must be joined at a time
// a player can't move until the other player's turn
// player's move will be reflected in both the player's board



// Connect to the server
const socket = io('http://localhost:8000');

// Handle game events from the server
socket.on('init', (data) => {
  console.log(data);
});

socket.on('join', (data) => {
  console.log(`Player ${data.player} joined the game`);
});

socket.on('move', (data) => {
  console.log(`Player ${data.player} made a move at ${data.position}`);
  // Update the game UI with the move
});

socket.on('win', (data) => {
  console.log(`Player ${data.player} won the game!`);
  // Display the winner in the UI
});

socket.on('tie', () => {
  console.log('The game ended in a tie.');
  // Display tie message in the UI
});

// Handle user interactions and emit events to the server
// ...


export default socket;