import { SNACKBARSTATUS, SNACKBARPROPS } from '../action/snackBar';

const initialState = {
  snackbarStatus: false,
  snackBarMessage: null,
  snackBarVariant: null
};
/*
  Snack Bar Reducer
*/
const reducer = (state = initialState, action) => {
  if (action.type === SNACKBARSTATUS) {
    return {
      ...state,
      snackbarStatus: action.value
    };
  }
  if (action.type === SNACKBARPROPS) {
    return {
      ...state,
      snackBarMessage: action.message,
      snackBarVariant: action.variant
    };
  }


  return state;
};

export default reducer;
