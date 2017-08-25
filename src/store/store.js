import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reactReduxFirebase, firebaseStateReducer, getFirebase } from 'react-redux-firebase'
import * as firebase from 'firebase'
import reducers from 'store/reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import history from 'store/enhancedHistory';
import rootReducer from 'store/reducers';

const reduxFirebase = {
  userProfile: 'users',
  public: 'public',
  enableLogging: 'false'
};

// Firebase config
const config = {
  apiKey: 'deleted',
  authDomain: 'deleted',
  databaseURL: 'deleted',
  storageBucket: 'deleted'
}

// initialize firebase instance
firebase.initializeApp(config) // <- new to v2.*.*
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const sagaMiddleware = createSagaMiddleware() // create middleware
const historyMiddleware = routerMiddleware(history);

const middlewares = [
  sagaMiddleware,
  historyMiddleware,
];

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      reactReduxFirebase(firebase, reduxFirebase),
      applyMiddleware(...middlewares),
    )
);

function* helloSaga(getFirebase) {
  try {
    console.log('before push')
    yield getFirebase().push('/public', { nice: 'work!' });
    console.log('after push')
  } catch(err) {
    console.log('Error in saga!:', err)
  }
}

sagaMiddleware.run(helloSaga, getFirebase);

export default store;
