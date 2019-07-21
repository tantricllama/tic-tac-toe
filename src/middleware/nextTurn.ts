import { getNextTurn } from '../actions';
import { Store } from 'redux';
import { TAKE_TURN, GameActions, SWITCH_PLAYER, NEW_GAME } from '../types';

// Checks to see if all cells are filled
export default function aiTurn(store: Store) {
  return function(next: any) {
    return function(action: GameActions) {
      // We still need to take the turn so the action will continue anyway
      var n = next(action);

      if (action.type === NEW_GAME || action.type === SWITCH_PLAYER) {
        const { current, player } = store.getState();

        if (current !== player) {
          return store.dispatch(getNextTurn(current));
        }
      } else if (action.type === TAKE_TURN) {
        const { board, current, player, winner } = store.getState();

        if (current !== player && winner === null) {
          var layout = '';
          for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
              if (board[r][c] === '') {
                layout += '.';
              } else {
                layout += board[r][c];
              }
            }
          }

          return store.dispatch(getNextTurn(current, layout));
        }
      }

      return n;
    }
  }
}