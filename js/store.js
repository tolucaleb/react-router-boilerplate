import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const history = createHistory();
const routerMiddlewareHistory = routerMiddleware(history);
const middleWare = [thunk, routerMiddlewareHistory];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(reducers);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
