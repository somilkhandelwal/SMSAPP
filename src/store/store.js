import {
  createStore, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';
import root from './reducer/rootReducer';

const logger = store => next => (action) => {
  console.log('{Middle Ware } Dispatching ', action);
  const result = next(action);
  console.log('NextState', store.getState());
  return result;
};
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, composeEnhancers(applyMiddleware(logger, thunk)));
export default store;
