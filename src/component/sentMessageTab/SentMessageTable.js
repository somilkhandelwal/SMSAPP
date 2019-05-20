import React from 'react';
import {
  Paper, CircularProgress
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Actions from '../../store/action/sentMessage';
import Table from '../common/Table';

const rows = [{
  id: 'name', numeric: false, disablePadding: true, labelEn: 'SENT_MESSAGE_TABLE_NAME'
},
{
  id: 'timeStamp', numeric: false, disablePadding: true, labelEn: 'SENT_MESSAGE_TABLE_TIMESTAMP'
},
{
  id: 'otp', numeric: false, disablePadding: true, labelEn: 'SENT_MESSAGE_TABLE_OTP'
}];

/*
  Table specific to already sent messages
  using Table Generic Component
*/
class SentMessageTable extends React.Component {
  componentDidMount() {
    const { onLoad } = this.props;
    if (onLoad) onLoad();
  }

  render() {
    const { data, loading } = this.props;
    console.log(data);
    if (loading) return <CircularProgress color="primary" />;
    if (!data || !data.length) return null;
    return (
      <Paper position="static" color="default">
        <Table
          orderBy="timeStamp"
          data={data}
          rows={rows}
        />
      </Paper>
    );
  }
}

SentMessageTable.propTypes = {
  onLoad: PropTypes.func.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired
};
SentMessageTable.defaultProps = {
  data: null
};

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(Actions.loadSentMessages())
  };
}
function mapStateToProps(state) {
  const { sentMessages } = state;
  if (sentMessages.loading) return { loading: sentMessages.loading };
  const data = (sentMessages && sentMessages.data) || [];
  return {
    loading: false,
    data
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SentMessageTable));
