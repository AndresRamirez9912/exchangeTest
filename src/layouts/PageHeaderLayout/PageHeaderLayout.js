import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
/* import APLogo from 'apex-web/lib/components/common/APLogo/APLogo'; */
import LogoDashboard from '../../images/logo-kiiex-dark-htal.svg';
import PageHeaderNavComponent from '../../components/PageHeader/PageHeaderNavComponent';
import UserSummaryContainer from '../../components/UserSummary/UserSummaryContainer';
import './PageHeaderLayout.css';
import './UserSummaryOverrides.css';

const pageHeaderClasses = getBEMClasses('page-header');

const MainNavItems = [
  { text: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
/*   { text: 'Digital Assets', icon: 'buy-sell', path: '/digital-assets' }, */
  { text: 'Exchange', icon: 'trading', path: '/exchange' },
/*   { text: 'Balances', icon: 'balance', path: '/margin-balances' }, */
/*   { text: 'Streaming', icon: 'activity', path: '/eotc' }, */
/*   { text: 'Lending', icon: 'sell', path: '/iba' }, */
  { text: 'Buy & Sell', icon: 'buy-sell', path: '/buy-sell' },
/*   { text: 'Convert', icon: 'buy-sell', path: '/convert' }, */
  { text: 'Wallets', icon: 'wallet', path: '/wallets' }
  // { text: 'Activity', icon: 'activity', path: '/asset-activity-details' }
  // { text: 'Components', icon: 'star', path: '/component' }
];

const PageHeaderComponent = () => {
  return (
    <React.Fragment>
      <div className={pageHeaderClasses('container')}>
        <div className={pageHeaderClasses('content-wrapper')}>
           {/* we replaced the kiiex logo on the left side of the dashboard header - above code on line31 - new code on line35
          <div className={pageHeaderClasses('header-item', 'logo')}>
            <APLogo customClass={pageHeaderClasses('logo')} linkTo="/" />
          </div>
          */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left'
            }}>
            <img
              src={LogoDashboard}
              alt="KIIEX Logo header Dashboard"
              style={{ width: '40%', marginLeft: '10px' }}
            />
          </div>
          <PageHeaderNavComponent navItems={MainNavItems} />
          <div className={pageHeaderClasses('right-panel')}>
            <UserSummaryContainer
              customClass="page-header-user-summary"
              settingsRoute="/settings/user"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageHeaderComponent;
