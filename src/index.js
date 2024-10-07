import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import I18n from 'redux-i18n';
import history from './helpers/history';
import * as numberFormatter from 'apex-web/lib/helpers/numberFormatter';
import initAPEXWebActions from 'apex-web/lib/helpers/apexWebActions';
import { unregister } from './registerServiceWorker';
import config from './config';
import cssVars from 'css-vars-ponyfill';

import './styles/base/Fonts.css';
import './styles/base/Base.css';
import './styles/theme/variables.css';
import './styles/components/common/Divider.css';
import './styles/layout/Table.css';
import './styles/layout/app.css';
import './styles/components/common/index.css';
import App from './App';
import store from './redux/store';

import('./config').then(config =>
  import(`./styles/theme/${config.default.global.theme}.css`)
);

initAPEXWebActions();

numberFormatter.init({
  locale: config.global.locale,
  getDecimalPlaces: () => store.getState().product.decimalPlaces
});

window.cssVariables = {};
cssVars({
  watch: true,
  silent: true,
  onComplete: function(cssText, styleNode, cssVariables) {
    window.cssVariables = cssVariables;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <I18n translations={window.APEXTranslations || { en: {} }}>
        <App />
      </I18n>
    </Router>
  </Provider>,
  document.getElementById('root')
);

unregister();
