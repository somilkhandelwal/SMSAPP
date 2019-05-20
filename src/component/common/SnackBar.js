import React from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import classNames from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import actionTypes from '../../store/action/snackBar';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

const MySnackbarContent = (props) => {
  const {
    classes, className, message, onClose, variant, ...other
  } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
)}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
};

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
};
MySnackbarContent.defaultProps = {
  message: null,
  onClose: () => null
};

/*
  To show error and success status
*/
const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class CustomizedSnackbars extends React.Component {
  handleClick = () => {
    const { setSnackBarStatus } = this.props;
    setSnackBarStatus(true);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    const { setSnackBarStatus } = this.props;
    setSnackBarStatus(true);
    setSnackBarStatus(false);
  };

  render() {
    const { snackBarVariant, snackBarMessage, snackbarStatus } = this.props;

    return (
      <div>
        {!(snackBarMessage === undefined || snackBarMessage === null)

          && (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            open={snackbarStatus}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant={snackBarVariant}
              message={snackBarMessage}
            />
          </Snackbar>
          )
        }
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  snackbarStatus: PropTypes.bool,
  snackBarMessage: PropTypes.string,
  snackBarVariant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  setSnackBarStatus: PropTypes.func.isRequired

};
CustomizedSnackbars.defaultProps = {
  snackbarStatus: false,
  snackBarMessage: '',
  snackBarVariant: 'success'
};
const mapStateToProps = state => ({
  snackbarStatus: state.snackBar.snackbarStatus,
  snackBarMessage: state.snackBar.snackBarMessage,
  snackBarVariant: state.snackBar.snackBarVariant
});

const mapDispatchToProps = dispatch => ({
  setSnackBarStatus: status => dispatch(actionTypes.setSnackBarStatus(status))
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles2
)(CustomizedSnackbars));
