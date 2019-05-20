import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { withTranslation } from 'react-i18next';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
});

class AppToolbar extends React.Component {
  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            {t('APPBAR_TITLE')}
          </Typography>
          <div className={classes.grow} />
          <Typography color="inherit">{t('APPBAR_USER')}</Typography>
          <IconButton><ArrowDropDown color="inherit" /></IconButton>
        </Toolbar>
      </div>
    );
  }
}

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};
AppToolbar.defaultProps = {
};

export default withStyles(styles)(withTranslation()(AppToolbar));
