import React from 'react';
import PropTypes from 'prop-types';
import ApiKeysSidePaneButtonContainer from 'apex-web/lib/components/Settings/ApiKeys';
import ApiKeyListContainer from 'apex-web/lib/components/ApiKeysSidePaneComponents/ApiKeyList/ApiKeyListContainer';
import config from '../config';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './APIKeysPage.css';

const apiKeysPageClasses = getBEMClasses('api-keys-page');

const APIKeysPage = (props, context) => (
  <div className={apiKeysPageClasses()}>
    <div className={apiKeysPageClasses('description-container')}>
      <div className={apiKeysPageClasses('header')}>
        <div className={apiKeysPageClasses('header-title')}>
          {context.t('About API Keys')}
        </div>
        <div className={apiKeysPageClasses('header-text')}>
          {context.t(
            'The Public API is available in HTTP, WebSocket, and Get Request, with streaming data on products, product pairs, ticker activity, trades, and the order book.'
          )}
        </div>
        <div className={apiKeysPageClasses('header-text')}>
          {context.t(
            "The Private API is accessible only by registered users and enables access and control of a user's account. All key user functions may be executed from the API, including account and order management activities."
          )}
        </div>
      </div>
      <div className={apiKeysPageClasses('actions')}>
        <ApiKeysSidePaneButtonContainer />
        <div className={apiKeysPageClasses('documentation')}>
          <a href={config.ApiKeys.documentationLink} target="blank">
            {context.t('View: API Documentation »')}
          </a>
        </div>
      </div>
    </div>
    <div>
      <div className={apiKeysPageClasses('table-header')}>
        {context.t('Existing API Keys')}
      </div>
      <ApiKeyListContainer customClass={'retail-api-key-list'} />
    </div>
  </div>
);

APIKeysPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default APIKeysPage;
