// The Game is made up of a Baord and some Rules.

// the Board is made up of 9 Blocks.

// each Block consists 3 states, named -> "X", "O", " ".

// there are two Players

// a Player's properties are -> name, symbol.

// the Rules are -> if 3 horizontal || 3 virtical 
// || 3 diagonal blocks contains the same symbol, 
// the Player wins who has the symbol, and the other Player loses.

// Objects -> Game, Board, Block, Player.

import Game from './Game.js'
import Player from "./Player.js";

//Initialize game
const player1 = new Player('player 1', 'X')
const player2 = new Player('player 2', 'O')
export const game = new Game(player1, player2);

