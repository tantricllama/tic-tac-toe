export const NEW_GAME = 'NEW_GAME';
export const TAKE_TURN = 'TAKE_TURN';
export const GAME_WON = 'GAME_WON';
export const GAME_OVER = 'GAME_OVER';
export const SWITCH_PLAYER = 'SWITCH_PLAYER';

export interface GameState {
  board: string[][];
  current: string;
  player: string;
  winner?: string | null;
  winningCells: number[][];
};

interface NewGame {
  type: typeof NEW_GAME;
}

interface TakeTurn {
  type: typeof TAKE_TURN;
  row: number;
  col: number;
}

interface GameWon {
  type: typeof GAME_WON;
  winner: string;
  winningCells: number[][];
}

interface GameOver {
  type: typeof GAME_OVER;
}

interface SwitchPlayer {
  type: typeof SWITCH_PLAYER;
}

export type GameActions = NewGame | TakeTurn | GameWon | GameOver | SwitchPlayer;

//

export const NEXT_TURN_REQUEST = 'NEXT_TURN_REQUEST';
export const NEXT_TURN_SUCCESS = 'NEXT_TURN_SUCCESS';
export const NEXT_TURN_FAILURE = 'NEXT_TURN_FAILURE';

export interface AIState {
  loading: boolean;
  error: any;
  r: number | null;
  c: number | null;
};

interface NextTurnRequest {
  type: typeof NEXT_TURN_REQUEST;
}

interface NextTurnSuccess {
  type: typeof NEXT_TURN_SUCCESS;
  data: any[];
}

interface NextTurnFailure {
  type: typeof NEXT_TURN_FAILURE;
  error: any;
}

export type AIActions = NextTurnRequest | NextTurnSuccess | NextTurnFailure;