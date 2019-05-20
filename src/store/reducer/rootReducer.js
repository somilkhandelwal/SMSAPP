import { combineReducers } from 'redux';
import contact from './loadContactReducer';
import sentMessages from './sentMessageReducer';
import snackBar from './snackBar';

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  contact,
  sentMessages,
  snackBar


});

const root = (state, action) => {
  if (action.type === 'RESET') {
    return (undefined, action);
  }
  return appReducer(state, action);
};

export default root;
