import {
  LOAD_CONTACTS_GET,
  LOAD_CONTACTS_RECIEVE,
  LOAD_CONTACTS_CANCEL,
  ONE_CONTACT
} from '../action/loadContactAction';

const initialState = {
  data: null,
  loading: false
};
/*
  Load Contact Reducer
*/
const loadContactReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_CONTACTS_GET:
      newState = {
        ...state,
        data: null,
        loading: true
      };
      return newState;
    case LOAD_CONTACTS_RECIEVE:
      newState = {
        ...state,
        data: action.data.data.contact,
        loading: false
      };
      return newState;
    case LOAD_CONTACTS_CANCEL:
      newState = {
        ...state,
        data: null,
        loading: false
      };
      return newState;
    case ONE_CONTACT:
      newState = {
        ...state,
        singleEntry: action.row
      };
      return newState;
    default:
      return state;
  }
};

export default loadContactReducer;
