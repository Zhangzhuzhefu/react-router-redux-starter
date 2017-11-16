import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import initialState from '../reducers/initialState';

export default function configureStore(history) {
  const middleware = routerMiddleware(history);

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, middleware)
  );
}
