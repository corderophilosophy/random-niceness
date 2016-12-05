import { createStore } from 'redux';
import createLogger from 'redux-logger'
import throttle from 'lodash.throttle';
import Niceness from '../reducers';
import { loadState, saveState } from '../helpers';

const loggerMiddleware = createLogger();

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(Niceness);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  return store;
};

export default configureStore;
