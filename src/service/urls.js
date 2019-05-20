/*
  Specific to url Navigation
*/
const urls = {
  changeTab: (id) => {
    const baseUrl = '';
    return `${baseUrl}/${id}`;
  },
  selectPerson: (id) => {
    const baseUrl = '/first';
    return `${baseUrl}/person/${id}`;
  }
};

export default urls;
