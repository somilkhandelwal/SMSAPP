import {
  SENT_LIST_GET,
  SENT_LIST_RECIEVE,
  SENT_LIST_CANCEL
} from '../action/sentMessage';

const initialState = {
  data: null,
  loading: false
};
/*
  Sent Message Reducer
*/
const sentMessageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SENT_LIST_GET:
      newState = {
        ...state,
        data: null,
        loading: true
      };
      return newState;
    case SENT_LIST_RECIEVE:
      newState = {
        ...state,
        data: action.data.data.data,
        loading: false
      };
      return newState;
    case SENT_LIST_CANCEL:
      newState = {
        ...state,
        data: null,
        loading: false
      };
      return newState;
    default:
      return state;
  }
};

export default sentMessageReducer;
