import { TAKE_TURN } from '../actions';

// Checks to see if the cell can be filled
export default function checkIfCellIsFilled(store) {
  return function(next) {
    return function(action) {
      if (action.type === TAKE_TURN) {
        const { board, winner } = store.getState();

        // If there is a winner then we cant fill the cell
        if (winner !== null) return;

        // If the cell is already filled we cant fill the cell
        if (board[action.row][action.col] !== '') return;
      }

      return next(action);
    }
  }
}