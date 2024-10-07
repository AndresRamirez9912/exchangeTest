import React from 'react';
import PropTypes from 'prop-types';
import TransferHistoryContainer from 'apex-web/lib/components/Settings/TransferHistory';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './UserContactsPage.css';

const userContactsPageClasses = getBEMClasses('user-contacts-page');

const UserContactsPage = (props, context) => (
  <div className={userContactsPageClasses()}>
    <div className={userContactsPageClasses('block-with-text')}>
      <div className={userContactsPageClasses('header-text')}>
        {context.t('Trading with Other On-Exchange Participants')}
      </div>
      <div className={userContactsPageClasses('text')}>
        {context.t(
          'You can freely transfer currency with other participants on the exchange. Simply provide the email address for your contact during the “Send” or “Receive” process. If the email address is registered on the exchange, then the user will receive the transfer. If the email address is not registered, the user will get an invitation to join the exchange.'
        )}
      </div>
    </div>
    <div className={userContactsPageClasses('transfer')}>
      <div className={userContactsPageClasses('transfer-header')}>
        {context.t('Transfer History')}
      </div>
      <div className={userContactsPageClasses('transfer-items')}>
        <TransferHistoryContainer />
      </div>
    </div>
  </div>
);

UserContactsPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default UserContactsPage;
