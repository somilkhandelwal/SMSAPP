import api from '../../service/api/api';
import { url as appendUrl } from '../../config/config';
import Actions from './snackBar';

export const SENT_LIST_RECIEVE = 'SENT_LIST_RECIEVE';
export const SENT_LIST_GET = 'SENT_LIST_GET';
export const SENT_LIST_CANCEL = 'SENT_LIST_CANCEL';
/*
  Action Specific to populate Sent Message Table
*/
const baseUrl = `${appendUrl}/sentMessages`;
const loadSentMessages = () => (dispatch) => {
  dispatch({ type: SENT_LIST_GET });
  api.apiGet(baseUrl, null,
    data => dispatch({ type: SENT_LIST_RECIEVE, data }),
    () => {
      dispatch({ type: SENT_LIST_CANCEL });
      dispatch(Actions.setSnackBarProps('error', 'Error! Check with Admin'));
      dispatch(Actions.setSnackBarStatus(true));
    });
};
export default {
  loadSentMessages
};
