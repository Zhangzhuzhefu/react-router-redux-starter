import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navigationReducer(state = initialState.selectedIndex, action) {
  switch (action.type) {
    case types.CLICK_PAGE:
      return action.selectedIndex;
    default:
      return state;
  }
}
