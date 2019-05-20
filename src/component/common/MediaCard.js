import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
  Typography,
  CardMedia,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  Card,
  Button,
  FormHelperText
} from '@material-ui/core';
import actionTypes from '../../store/action/send';

const styles = {
  card: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    minHeight: 300,
    width: 300
  },
  cardContent: {
    minHeight: 120
  },
  button: {
    marginTop: 12,
    width: '100%'
  }
};
/*
  generate a random number
 */
const randomNumberCreator = () => Math.floor((Math.random() * 1000000) + 1);
/*
  Media Card where send functionality is there..
 */
function MediaCard(props) {
  const {
    classes, data, t, send
  } = props;
  const randomNumber = randomNumberCreator();
  /*
    useState Hooks
   */
  const [inputState, setInputField] = useState({ customMessage: '', error: false, errorMessage: '' });
  const generateTextFieldContent = () => t('MEDIACARD_MESSAGE').replace('"%randomOTP%"', randomNumber);
  /*
    Client side Validation
  */
  const validate = (value) => {
    if (generateTextFieldContent.length + value.length > 100) { return { status: true, message: 'Too Long Custom Message' }; }

    return { status: false, message: '' };
  };
  const handleChange = (evt) => {
    const { target: { value } } = evt;
    const { message, status } = validate(value);
    setInputField({ customMessage: value, error: status, errorMessage: message });
  };
  /*
    handle form submit
  */
  const handleSubmit = () => {
    const { message, status } = validate(inputState.customMessage);
    setInputField({
      customMessage: inputState.customMessage,
      error: status,
      errorMessage: message
    });
    if (status) return;
    if (send) send(data, randomNumber, inputState.customMessage);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="avatar.jpg"
        title={t('MEDIACARD_AVATAR_TITLE')}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="subtitle1">
          {`${t('MEDIACARD_NAME')} : ${data.firstName} ${data.lastName}`}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {`${t('MEDIACARD_MOBILE')} : ${data.fullNumber}`}
        </Typography>
        <form style={{ width: '100%' }}>
          <FormControl fullWidth required disabled>
            <InputLabel htmlFor="component-simple">{t('SENT_MESSAGE_TABLE_OTP')}</InputLabel>
            <Input id="component-simple" name="otp" defaultValue={generateTextFieldContent()} disabled />
          </FormControl>
          <FormControl fullWidth onBlurCapture={handleChange}>
            <InputLabel htmlFor="component-simple">{t('MEDIACARD_CUSTOM_MSG')}</InputLabel>
            <Input id="component-simple" name="businessContact" onChange={handleChange} />
            {inputState.error && <FormHelperText id="businessContactHelper" error>{inputState.errorMessage}</FormHelperText>}
          </FormControl>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            className={classes.button}
          >
            {t('MEDIACARD_SUMBIT')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  t: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired
};
MediaCard.defaultProps = {
  data: {
    id: 2,
    firstName: 'Mukund',
    lastName: 'Khandelwal',
    countryCode: '91',
    mobileNumber: '9176435818',
    fullNumber: '+91-9176435818'
  }
};
function mapDispatchToProp(dispatch) {
  return {
    send: (dataObj, otp, message) => dispatch(actionTypes.send(dataObj, otp, message))
  };
}
function mapStateToProps(state) {
  const singleContact = state.contact.singleEntry || null;
  if (!singleContact) {
    return {};
  }
  return {
    data: singleContact
  };
}
export default connect(
  mapStateToProps, mapDispatchToProp
)(withStyles(styles)(withTranslation()(MediaCard)));
