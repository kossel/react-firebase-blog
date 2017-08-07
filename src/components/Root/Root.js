import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from 'store/reducers'
import App from 'components/App';

const history = createHistory();
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  )
}
