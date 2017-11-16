import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import initialState from '../reducers/initialState';

export default function configureStore(history) {
  const middleware = routerMiddleware(history);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant(), middleware)
  );
}
