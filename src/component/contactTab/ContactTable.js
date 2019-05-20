import React from 'react';
import {
  Paper, CircularProgress
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Actions from '../../store/action/loadContactAction';
import Table from '../common/Table';

const rows = [{
  id: 'firstName', numeric: false, disablePadding: true, labelEn: 'CONTACT_TABLE_FIRST_NAME'
},
{
  id: 'lastName', numeric: false, disablePadding: true, labelEn: 'CONTACT_TABLE_LAST_NAME'
},
{
  id: 'fullNumber', numeric: false, disablePadding: true, labelEn: 'CONTACT_TABLE_MOBILE_NUMBER'
}];
/*
  Table specific to Contact using generic Table Coponent
*/
class ContactTable extends React.Component {
  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) onLoad();
  }

  handleSelect = (row) => {
    const { navigate } = this.props;
    if (navigate) navigate(row);
  }

  render() {
    const { data, loading } = this.props;
    if (loading) return <CircularProgress color="primary" />;
    if (!data || !data.length) return null;
    return (
      <Paper position="static" color="default">
        <Table
          onSelect={this.handleSelect}
          orderBy="firstName"
          data={data}
          rows={rows}
        />
      </Paper>
    );
  }
}

ContactTable.propTypes = {
  onLoad: PropTypes.func.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired
};
ContactTable.defaultProps = {
  data: null
};

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(Actions.loadContacts()),
    navigate: id => dispatch(Actions.navigate(id))
  };
}
function mapStateToProps(state) {
  const { contact } = state;
  if (contact.loading) return { loading: contact.loading };
  let data = (contact && contact.data) || [];
  if (data.length > 0) {
    data = data.map(item => Object.assign({}, item, { fullNumber: `+${item.countryCode}-${item.mobileNumber}` }));
  }
  return {
    loading: false,
    data
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ContactTable));
