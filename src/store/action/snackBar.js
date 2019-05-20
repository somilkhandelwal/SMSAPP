export const SNACKBARSTATUS = 'SNACKBARSTATUS';
export const SNACKBARPROPS = 'SNACKBARPROPS';
/*
  Action Specific to Snackbar
*/
const setSnackBarProps = (variant, message) => (dispatch) => {
  dispatch({
    type: SNACKBARPROPS,
    variant,
    message
  });
};

const setSnackBarStatus = val => (dispatch) => {
  dispatch({
    type: SNACKBARSTATUS,
    value: val
  });
};

export default {
  setSnackBarProps,
  setSnackBarStatus
};
