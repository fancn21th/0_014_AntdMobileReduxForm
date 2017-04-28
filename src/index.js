import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import App from './components/App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const store = configureStore();

render(
  <I18nextProvider i18n={i18n}>
    <App store={store} />
  </I18nextProvider>,
  document.getElementById('root')
);
