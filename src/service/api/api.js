import axios from 'axios';

const headers = {
  'Access-Control-Allow-Origin': '*'
};
/*
  Genric API CALL
  ADD OTHER METHOD IF NEEDED
*/
const apiGet = (baseUrl, params, onSuccess, onError) => {
  axios.get(baseUrl, {
    params,
    headers
  }).then(
    response => onSuccess(response)
  ).catch(
    error => onError(error)
  );
};
const apiPost = (baseUrl, body, params, onSuccess, onError) => {
  axios.post(baseUrl, body, {
    params,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...headers
    }
  }).then(
    response => onSuccess(response)
  ).catch(
    error => onError(error)
  );
};

export default {
  apiPost,
  apiGet
};
