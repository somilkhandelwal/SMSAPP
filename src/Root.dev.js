import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { history } from './service/history';
import i18n from './i18n';

export default class Root extends Component {
  render() {
    const { routes, store } = this.props;

    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback="...">
            <Router history={history}>{routes}</Router>
          </Suspense>
        </I18nextProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.node.isRequired,
  store: PropTypes.shape({}).isRequired
};
