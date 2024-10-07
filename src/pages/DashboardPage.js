import React from 'react';
import PropTypes from 'prop-types';
import PageSubHeaderLayout from '../layouts/PageSubHeaderLayout/PageSubHeaderLayout';
import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';
import withAuthentication from 'apex-web/lib/hocs/withAuthentication';
import BalancesListContainer from 'apex-web/lib/components/BalancesList';
import MarketOverviewComponent from 'apex-web/lib/components/MarketOverview';
import RecentActivityContainer from 'apex-web/lib/components/RecentActivity/RecentActivityContainer';
import TransferRequestNotificationList from 'apex-web/lib/components/TransferRequestsNotification/';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './DashboardPage.css';
import '../styles/theme/keyvisualkiiex.css'; /* KIIEX general style sheet */

const layoutClasses = getBEMClasses('dashboard-page');

const DashboardPage = (props, context) => (
  <React.Fragment>
    <div className={layoutClasses('accent-bar')} />
    <PageSubHeaderLayout />
    <div className={layoutClasses()}>
      <div className={layoutClasses('notification-row')}>
        <TransferRequestNotificationList />
      </div>
      <div className={layoutClasses('market-overview-container')}>
        <div className={layoutClasses('market-overview-container-left')}>
          <div className={layoutClasses('market-header')}>
            {context.t('Markets Overview')}
          </div>
          <MarketOverviewComponent />
        </div>
        <div className={layoutClasses('market-overview-container-right')}>
          <div className={layoutClasses('balances-header')}>
            {context.t('Balances')}
          </div>
          <BalancesListContainer />
        </div>
      </div>
      <div className={layoutClasses('recent-activity-container')}>
        <RecentActivityContainer filterForSelected={false} />
      </div>
    </div>
    <div className={layoutClasses('footer')}>
      <PageFooterLayout />
    </div>
  </React.Fragment>
);

DashboardPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default withAuthentication(DashboardPage);
