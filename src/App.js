import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { muiTheme } from './theme';
import Headers from './component/header/Header';
import SnackBar from './component/common/SnackBar';

function App(props) {
  const { approutes } = props;
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Headers />
      <SnackBar />
      {/*
        Adding Routes after Header and SnackBar
      */}
      {approutes}
    </MuiThemeProvider>
  );
}
App.propTypes = {
  approutes: PropTypes.object.isRequired
};
export default App;
