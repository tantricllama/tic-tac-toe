import {
  NEW_GAME,
  TAKE_TURN,
  GAME_WON,
  GAME_OVER,
  SWITCH_PLAYER,
  GameState,
  GameActions,
} from '../types';

const initialState: GameState = {
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],
  current: 'O',
  player: 'O',
  winner: null,
  winningCells: []
};

export default function(state = initialState, action: GameActions) {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        current: 'O',
        winner: null,
        winningCells: []
      };

    case TAKE_TURN:
      const board = state.board.slice(0);

      board[action.row][action.col] = state.current;

      return {
        ...state,
        board,
        current: state.current === 'O' ? 'X' : 'O'
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
    
    case SWITCH_PLAYER:
      return {
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        current: 'O',
        player: state.player === 'O' ? 'X' : 'O',
        winner: null,
        winningCells: []
      };

    default:
      return state;
  }
}