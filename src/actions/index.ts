import { NEW_GAME, TAKE_TURN, GAME_WON, GAME_OVER, GameActions } from '../types';

export function newGame(): GameActions {
  return {
    type: NEW_GAME
  };
}

export function takeTurn(row: number, col: number): GameActions {
  console.log(row, col)
  return {
    type: TAKE_TURN,
    row,
    col
  };
}

export function gameWon(winner: string, winningCells: number[][]): GameActions {
  return {
    type: GAME_WON,
    winner,
    winningCells
  };
}

export function gameOver(): GameActions {
  return {
    type: GAME_OVER
  };
}