import { history } from '../../service/history';
import api from '../../service/api/api';
import { url as appendUrl } from '../../config/config';
import Actions from './snackBar';

export const SEND_MSG = 'SEND_MSG';
/*
  Action Specific to send OTP Call
*/

const baseUrl = `${appendUrl}/send`;
const send = (dataObj, otp, message) => (dispatch) => {
  const formData = new FormData();
  formData.append('mobileNumber', dataObj.mobileNumber);
  formData.append('countryCode', dataObj.countryCode);
  formData.append('firstName', dataObj.firstName);
  formData.append('lastName', dataObj.lastName);
  formData.append('otp', otp);
  formData.append('message', message);

  api.apiPost(baseUrl, formData, null,
    (data) => {
      dispatch(Actions.setSnackBarProps('success', `Message Sent Successfully ${data.data.id}`));
      dispatch(Actions.setSnackBarStatus(true));
      history.push('/');
    },
    () => {
      dispatch(Actions.setSnackBarProps('error', 'Error! Check with Admin'));
      dispatch(Actions.setSnackBarStatus(true));
    });
};
export default {
  send
};
