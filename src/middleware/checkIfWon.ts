import { Store } from 'redux';
import { gameWon } from '../actions';
import { TAKE_TURN, GameActions } from '../types';

// Checks to see if the current player has won
export default function checkIfWon(store: Store) {
  return function(next: any) {
    return function(action: GameActions) {
      if (action.type === TAKE_TURN) {
        const { board, current } = store.getState();

        // Check the row
        var cells = rowHasWon(action.row, action.col, board, current);
        if (cells.length) {
          store.dispatch(gameWon(current, cells));
        }

        // Check the column
        cells = colHasWon(action.row, action.col, board, current);
        if (cells.length) {
          store.dispatch(gameWon(current, cells));
        }

        // Check diagonally
        cells = diagonalHasWon(action.row, action.col, board, current);
        if (cells.length) {
          store.dispatch(gameWon(current, cells));
        }
      }

      return next(action);
    }
  }
}

function rowHasWon(row: number, col: number, board: string[][], current: string) {
  var cells = [[row, col]];

  for (var c = 0; c < 3; c++) {
    if (c === col) continue; // Ignore the selected row as its not set yet

    // Check if the cell is empty or set to the other player
    if (board[row][c] === '' || board[row][c] !== current) {
      return [];
    }

    cells.push([row, c]);
  }

  return cells;
}

function colHasWon(row: number, col: number, board: string[][], current: string) {
  var cells = [[row, col]];

  for (var r = 0; r < 3; r++) {
    if (r === row) continue; // Ignore the selected column as its not set yet

    // Check if the cell is empty or set to the other player
    if (board[r][col] === '' || board[r][col] !== current) {
      return [];
    }

    cells.push([r, col]);
  }

  return cells;
}

function diagonalHasWon(row: number, col: number, board: string[][], current: string) {
  // Top left to bottom right
  if (
    ((row === 0 && col === 0) || board[0][0] === current) &&
    ((row === 1 && col === 1) || board[1][1] === current) &&
    ((row === 2 && col === 2) || board[2][2] === current)
  ) {
    return [[0, 0], [1, 1], [2, 2]];
  }

  // Bottom left to top right
  if (
    ((row === 2 && col === 0) || board[2][0] === current) &&
    ((row === 1 && col === 1) || board[1][1] === current) &&
    ((row === 0 && col === 2) || board[0][2] === current)
  ) {
    return [[2, 0], [1, 1], [0, 2]];
  }

  // No match
  return [];
}