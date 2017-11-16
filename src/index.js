/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import {routes} from './routes'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const history = createHistory();
const store = configureStore(history);

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history} >
        <div>
          <Route exact path={routes[0].path} component={routes[0].component}/>
          <Route path={routes[1].path} component={routes[1].component}/>
          <Route path={routes[2].path} component={routes[2].component}/>
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
