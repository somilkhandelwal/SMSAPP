import urls from '../../service/urls';
import { history } from '../../service/history';
import api from '../../service/api/api';


export const LOAD_CONTACTS_RECIEVE = 'LOAD_CONTACTS_RECIEVE';
export const LOAD_CONTACTS_GET = 'LOAD_CONTACTS_GET';
export const LOAD_CONTACTS_CANCEL = 'LOAD_CONTACTS_CANCEL';
export const ONE_CONTACT = 'ONE_CONTACT';
/*
  Action Specific Load Contact Table
  Populating from hard-coded JSON FILE
*/

const baseUrl = 'contacts.json';
const loadContacts = () => (dispatch) => {
  dispatch({ type: LOAD_CONTACTS_GET });
  api.apiGet(baseUrl, null,
    data => dispatch({ type: LOAD_CONTACTS_RECIEVE, data }),
    () => dispatch({ type: LOAD_CONTACTS_CANCEL }));
};
const navigate = row => (dispatch) => {
  dispatch({ type: ONE_CONTACT, row });
  history.push(urls.selectPerson(row.id));
};
export default {
  loadContacts,
  navigate
};
