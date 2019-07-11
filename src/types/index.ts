export const NEW_GAME = 'NEW_GAME';
export const TAKE_TURN = 'TAKE_TURN';
export const GAME_WON = 'GAME_WON';
export const GAME_OVER = 'GAME_OVER';

export interface GameState {
  board: string[][];
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

export type GameActions = NewGame | TakeTurn | GameWon | GameOver;