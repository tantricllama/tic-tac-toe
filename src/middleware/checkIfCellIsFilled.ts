import { Store } from 'redux';
import { TAKE_TURN, GameActions } from '../types';

// Checks to see if the cell can be filled
export default function checkIfCellIsFilled(store: Store) {
  return function(next: any) {
    return function(action: GameActions) {
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