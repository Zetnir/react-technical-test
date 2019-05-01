import { combineReducers } from 'redux';

import { MENU_OPEN, MENU_CLOSE } from './menu.actions';

function menuState(state = { visible: false }, action) {
  switch(action.type) {
    case MENU_OPEN:
      return {
        ...state,
        visible: true
      }
    case MENU_CLOSE:
      return {
        ...state,
        visible: false
      }
    default: 
      return state;
  }
}

const menuApp = combineReducers({
  menuState
});

export default menuApp;