export const NEW_GAME = 'NEW_GAME';
export const TAKE_TURN = 'TAKE_TURN';
export const GAME_WON = 'GAME_WON';
export const GAME_OVER = 'GAME_OVER';

export function newGame() {
  return {
    type: NEW_GAME
  };
}

export function takeTurn(row, col) {
  return {
    type: TAKE_TURN,
    row,
    col
  };
}

export function gameWon(winner, winningCells) {
  return {
    type: GAME_WON,
    winner,
    winningCells
  };
}

export function gameOver() {
  return {
    type: GAME_OVER
  };
}