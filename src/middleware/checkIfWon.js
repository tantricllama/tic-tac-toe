import {
  TAKE_TURN,
  gameWon
} from '../actions';

// Checks to see if the current player has won
export default function checkIfWon(store) {
  return function(next) {
    return function(action) {
      if (action.type === TAKE_TURN) {
        const { board, player } = store.getState();

        // Check the row
        var cells = rowHasWon(action.row, action.col, board, player);
        if (cells.length) {
          next(action); // Call next action to fill the square
          return store.dispatch(gameWon(player, cells));
        }

        // Check the column
        cells = colHasWon(action.row, action.col, board, player);
        if (cells.length) {
          next(action); // Call next action to fill the square
          return store.dispatch(gameWon(player, cells));
        }

        // Check diagonally
        cells = diagonalHasWon(action.row, action.col, board, player);
        if (cells.length) {
          next(action); // Call next action to fill the square
          return store.dispatch(gameWon(player, cells));
        }
      }

      return next(action);
    }
  }
}

function rowHasWon(row, col, board, player) {
  var cells = [[row, col]];

  for (var c = 0; c < 3; c++) {
    if (c === col) continue; // Ignore the selected row as its not set yet

    // Check if the cell is empty or set to the other player
    if (board[row][c] === '' || board[row][c] !== player) {
      return [];
    }

    cells.push([row, c]);
  }

  return cells;
}

function colHasWon(row, col, board, player) {
  var cells = [[row, col]];

  for (var r = 0; r < 3; r++) {
    if (r === row) continue; // Ignore the selected column as its not set yet

    // Check if the cell is empty or set to the other player
    if (board[r][col] === '' || board[r][col] !== player) {
      return [];
    }

    cells.push([r, col]);
  }

  return cells;
}

function diagonalHasWon(row, col, board, player) {
  // Top left to bottom right
  if (
    ((row === 0 && col === 0) || board[0][0] === player) &&
    ((row === 1 && col === 1) || board[1][1] === player) &&
    ((row === 2 && col === 2) || board[2][2] === player)
  ) {
    return [[0, 0], [1, 1], [2, 2]];
  }

  // Bottom left to top right
  if (
    ((row === 2 && col === 0) || board[2][0] === player) &&
    ((row === 1 && col === 1) || board[1][1] === player) &&
    ((row === 0 && col === 2) || board[0][2] === player)
  ) {
    return [[2, 0], [1, 1], [0, 2]];
  }

  // No match
  return [];
}