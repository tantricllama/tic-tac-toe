import { createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/game';
import checkIfCellIsFilled from '../middleware/checkIfCellIsFilled';
import checkIfWon from '../middleware/checkIfWon';
import checkIfOver from '../middleware/checkIfOver';
import nextTurn from '../middleware/nextTurn';

const middlewares = [
  checkIfCellIsFilled,
  checkIfOver,
  checkIfWon,
  nextTurn,
  thunk
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares as Middleware[])
);

export default store;