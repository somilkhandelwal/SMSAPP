// import api from '../../service/api/api';
import urls from '../../service/urls';
import { history } from '../../service/history';
/*
  Action Specific to tab change
*/
const navigate = id => () => {
  history.push(urls.changeTab(id));
};

export default {
  navigate
};
