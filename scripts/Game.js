import Board from "./Board.js";

export default class Game {
  constructor(player1, player2) {
    this.board = new Board();
    this.players = [player1, player2];
    this.currentPlayer = player1;
  }

  reset() {
    this.baord = new Board();
    this.board = new Board();
  }

  checkWin(callBack) {
    const combinations = [
      // hoizontal combinations
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // vertical combinations
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonal combinations
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    for (const combination of combinations) {
      const [a, b, c] = combination;
      const blockA = this.board.blocks[a[0]][a[1]];
      const blockB = this.board.blocks[b[0]][b[1]];
      const blockC = this.board.blocks[c[0]][c[1]];

      if (!blockA.isEmpty()
        && blockA.symbol === blockB.symbol && blockB.symbol === blockC.symbol
      ) {
        console.log(blockC.symbol)
        alert(`${this.currentPlayer.name} wins!`);
        callBack();
        return;
      }
    }
  }

  checkDraw() {
    for (let i = 0; i < this.board.blocks.length; i++) {
      for (let j = 0; j < this.board.blocks[i].length; j++) {
        if (this.board.blocks[i][j].isEmpty())
          return false;
      }
    }
    return true;
  }

  playTurn(row, column) {
    const block = this.board.blocks[row][column];
    if (block.isEmpty()) {
      block.symbol = this.currentPlayer.symbol;
      this.checkWin(() => {
        this.reset();
        alert('Do you wanna play again?')
      });
      if (this.checkDraw()) {
        this.reset();
        alert('match draw!');
        return;
      }
      this.switchTurn();
    }
  }

  switchTurn() {
    this.currentPlayer =
      this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    this.board.update();
  }
}