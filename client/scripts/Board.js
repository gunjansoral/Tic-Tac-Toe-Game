import Block from "./Block.js";
import { game } from "./index.js";

export default class Board {
  constructor() {
    this.blocks = [];
    for (let i = 0; i < 3; i++) {
      this.blocks[i] = [];
      for (let j = 0; j < 3; j++) {
        this.blocks[i][j] = new Block();
      }
    }
    this.render();
  }

  update() {
    this.render();
  }

  render() {
    const board = document.getElementById('board');
    if (board) {
      board.remove();
    }

    const newBoard = document.createElement('div');
    newBoard.id = 'board';

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const block = document.getElementById(`block-${i}${j}`)
        if (block) {
          block.remove();
        }
        const newBlock = document.createElement('div');
        newBlock.className = 'block';
        newBlock.id = `block-${i}${j}`;
        newBlock.innerHTML = this.blocks[i][j].symbol;
        newBoard.append(newBlock);
        newBlock.addEventListener('click', () => game.playTurn(i, j));
      }
    }

    document.body.append(newBoard);
  }
}