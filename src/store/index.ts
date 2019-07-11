import { createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import checkIfCellIsFilled from '../middleware/checkIfCellIsFilled';
import checkIfWon from '../middleware/checkIfWon';
import checkIfOver from '../middleware/checkIfOver';

const middlewares = [
  checkIfCellIsFilled,
  checkIfOver,
  checkIfWon
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares as Middleware[])
);

export default store;