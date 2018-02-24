import { createStore, compose, applyMiddleware } from 'redux';
// import * as firebase from 'firebase';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import history from 'store/enhancedHistory';
import rootReducer from 'store/reducers';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const sagaMiddleware = createSagaMiddleware(); // create middleware
const historyMiddleware = routerMiddleware(history);

const middlewares = [
  sagaMiddleware,
  historyMiddleware,
];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
