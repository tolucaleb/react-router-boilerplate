import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../css/app.scss';

import App from './components/app';
import Features from './components/features';
import configureStore from './store';

const history = createHistory();
const store = configureStore();
render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/features" component={Features} />
        </div>
      </ConnectedRouter>
    </Provider>
  </AppContainer>
    , document.getElementById('container'));


if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route exact path="/" component={App} />
          </ConnectedRouter>
        </Provider>
      </AppContainer>
    , document.getElementById('container'));
  });
}
