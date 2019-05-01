import { createStore, combineReducers } from 'redux';

// gather reducers
import mainApp from './reducers';
import menuApp from './menu.reducers';

// combine them
const main = combineReducers({
  mainApp,
  menuApp
});

export const store = createStore(
  main, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // debugger
);