import React from 'react';
import { Route } from 'react-router-dom';
import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';
import SettingsMenuComponent from '../components/SettingsMenu/SettingsMenuComponent';
import UserSettingsPage from './UserSettingsPage';
import TradeReportPage from './TradeReportPage';
import TradeSettingsPage from 'apex-web/lib/components/Settings/TradeSettings';
import APIKeysPage from './APIKeysPage';
import UserContactsPage from './UserContactsPage';
import AffiliateProgramPage from './AffiliateProgramPage';
import LoyaltyTokenPage from './LoyaltyTokenPage';
import DemoSettingsContainer from 'apex-web/lib/components/Settings/DemoSettings/DemoSettingsContainer';
import InterestBearingAccountsSettingsContainer from 'apex-web/lib/components/Settings/InterestBearingAccounts/';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import KYCSettings from 'apex-web/lib/components/KYCSettings';
import './SettingsPage.css';

const settingsPageClasses = getBEMClasses('settings-page');

const SettingsPage = () => (
  <React.Fragment>
    <div className={settingsPageClasses('container')}>
      <div className={settingsPageClasses('menu')}>
        <SettingsMenuComponent />
      </div>
      <div className={settingsPageClasses('content')}>
        <Route path={'/settings/user'} component={UserSettingsPage} />
        <Route path="/settings/trade" component={TradeSettingsPage} />
        <Route
          path="/settings/iba"
          component={InterestBearingAccountsSettingsContainer}
        />
        <Route path={'/settings/trade-reports'} component={TradeReportPage} />
        <Route path={'/settings/api-keys'} component={APIKeysPage} />
        <Route path={'/settings/contacts'} component={UserContactsPage} />
        <Route path={'/settings/affiliate'} component={AffiliateProgramPage} />
        <Route path={'/settings/loyalty-token'} component={LoyaltyTokenPage} />
        <Route path={'/settings/verification-level'} component={KYCSettings} />
        <Route
          path={'/settings/demo-settings'}
          component={DemoSettingsContainer}
        />
      </div>
    </div>
    <div className={settingsPageClasses('footer')}>
      <PageFooterLayout />
    </div>
  </React.Fragment>
);

export default SettingsPage;
