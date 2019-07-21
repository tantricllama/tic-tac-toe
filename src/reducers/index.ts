import { combineReducers } from 'redux';
import ai from './ai';
import game from './game';

export default function() {
  return combineReducers({
    ai,
    game
  });
}