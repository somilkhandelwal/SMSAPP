import React from 'react';
import {
  Paper,
  Tab, Tabs
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Actions from '../store/action/tabsAction';
import styles from '../Style/Component/tabs';
import ContactTable from './contactTab/ContactTable';
import SentMessageTable from './sentMessageTab/SentMessageTable';

const tabsArr = [
  { value: 'first', label: 'TABS_CONTACT_LIST' },
  { value: 'second', label: 'TABS_SENT_TEXT' }
];
/*
  Tab Front Page
  On Change of Tab Routing is happening
  For the first time if /:id is not present
  naigating to first page first tab.
*/
class TabView extends React.Component {
  componentDidMount() {
    const { navigate, match: { params } } = this.props;
    if (!params || !params.id) navigate('first');
  }

  renderTab = () => {
    const { classes, t, match: { params } } = this.props;
    return (
      <Tabs
        variant="fullWidth"
        indicatorColor="primary"
        value={params.id}
        onChange={this.handleChange}
        centered
      >
        {
          tabsArr.map(tab => (
            <Tab
              key={tab.value}
              className={classes.tabHeader}
              label={t(tab.label)}
              value={tab.value}
            />
          ))
        }
      </Tabs>
    );
  }

  handleChange = (event, value) => {
    const { navigate } = this.props;
    if (navigate) navigate(value);
  };

  renderContent = () => {
    const { match: { params } } = this.props;
    if (params.id === 'first') {
      return <ContactTable />;
    } return <SentMessageTable />;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper position="static" color="default">
          {this.renderTab()}
          {this.renderContent()}
        </Paper>
      </div>
    );
  }
}

TabView.propTypes = {
  classes: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    navigate: id => dispatch(Actions.navigate(id))
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(withTranslation()(TabView)));
