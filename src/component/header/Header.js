import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from './Toolbar';
/*
  AppBar
*/
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="sticky"><Toolbar /></AppBar>
      </React.Fragment>
    );
  }
}
Header.propTypes = {
};
Header.defaultProps = {

};

export default Header;
