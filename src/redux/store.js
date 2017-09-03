import { createStore, combineReducers } from 'redux';
import sharedReducer from './reducer';

const reducers = combineReducers({
  shared: sharedReducer
});

export default createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
