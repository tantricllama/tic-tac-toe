import { NEW_GAME, TAKE_TURN, GAME_WON, GAME_OVER, SWITCH_PLAYER, GameActions } from '../types';
import { NEXT_TURN_REQUEST, NEXT_TURN_SUCCESS, NEXT_TURN_FAILURE } from '../types';

export function newGame(): GameActions {
  return {
    type: NEW_GAME
  };
}

export function takeTurn(row: number, col: number): GameActions {
  return {
    type: TAKE_TURN,
    row,
    col
  };
}

export function gameWon(winner: string, winningCells: number[][]): GameActions {
  return {
    type: GAME_WON,
    winner,
    winningCells
  };
}

export function gameOver(): GameActions {
  return {
    type: GAME_OVER
  };
}

export function switchPlayer(): GameActions {
  return {
    type: SWITCH_PLAYER
  };
}

export function getNextTurn(player: string, layout?: string): any {
  return async function(dispatch: any) {
    dispatch(request());

    var url = 'http://127.0.0.1:8000/move/' + player;
    if (layout) {
      url += '/' + layout + '/';
    }

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(success(data));
        dispatch(takeTurn(data.hints[0], data.hints[1]));

        return data;
      })
      .catch(error => dispatch(failure(error)));
  }

  function request() { return { type: NEXT_TURN_REQUEST } }
  function success(data: any[]) { return { type: NEXT_TURN_SUCCESS, data } }
  function failure(error: any) { return { type: NEXT_TURN_FAILURE, error } }
}