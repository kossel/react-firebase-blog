import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import post from 'store/post/reducer';

export default combineReducers({
  post,
  router: routerReducer,
});
