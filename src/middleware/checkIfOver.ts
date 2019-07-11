import { gameOver } from '../actions';
import { Store } from 'redux';
import { TAKE_TURN, GameActions } from '../types';

// Checks to see if all cells are filled
export default function checkIfOver(store: Store) {
  return function(next: any) {
    return function(action: GameActions) {
      // We still need to take the turn so the action will continue anyway
      var n = next(action);

      if (action.type === TAKE_TURN) {
        const { board, winner } = store.getState();

        if (winner === null) {
          for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
              // Ignore the chosen cell because it wont be set
              if (action.row === r && action.col === c) continue;

              // If the cell is empty then the game is not over
              if (board[r][c] === '') return null;
            }
          }

          return store.dispatch(gameOver());
        }
      }

      return n;
    }
  }
}