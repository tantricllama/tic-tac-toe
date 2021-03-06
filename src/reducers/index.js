import {
  NEW_GAME,
  TAKE_TURN,
  GAME_WON,
  GAME_OVER
} from '../actions';
import initialState from './initialState';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        player: 'X',
        winner: null,
        winningCells: []
      };

    case TAKE_TURN:
      const board = state.board.slice(0);

      board[action.row][action.col] = state.player;

      return {
        ...state,
        board,
        player: state.player === 'O' ? 'X' : 'O'
      };
      
    case GAME_WON:
      return {
        ...state,
        winner: action.winner,
        winningCells: action.winningCells
      };
      
    case GAME_OVER:
      return {
        ...state,
        winner: ''
      };

    default:
      return state;
  }
}

export default rootReducer;