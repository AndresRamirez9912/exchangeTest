import React from 'react';
import PropTypes from 'prop-types';
import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';
import WalletDetailsBackButtonComponent from '../components/WalletDetails/WalletDetailsBackButtonComponent';
import withAuthentication from 'apex-web/lib/hocs/withAuthentication';
import BalancesMenuContainer from 'apex-web/lib/components/BalancesMenu/BalanceMenuContainer';
import WalletDetailsContainer from 'apex-web/lib/components/WalletDetails/WalletDetailsContainer';
import TransfersContainer from 'apex-web/lib/components/Transfers/TransfersContainer';
import TransfersFiltersContainer from 'apex-web/lib/components/Transfers/TransfersFilters';
import RecentActivityWithFilterContainer from 'apex-web/lib/components/RecentActivityWithFilter';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './ProductDetailsPage.css';

const layoutClasses = getBEMClasses('product-details-page');

const backPath = '/wallets';

const ProductDetailsPage = (props, context) => (
  <React.Fragment>
    <div className={layoutClasses('container')}>
      <div className={layoutClasses('menu')}>
        <WalletDetailsBackButtonComponent key="1" path={backPath} />
        <BalancesMenuContainer key="2" />
      </div>
      <div className={layoutClasses('content')}>
        <div className={layoutClasses('wallet-details')}>
          <WalletDetailsContainer />
        </div>
        <div className={layoutClasses('transfers')}>
          <div className={layoutClasses('transfers-header')}>
            {context.t('Transfers')}
          </div>
          <TransfersFiltersContainer />
          <TransfersContainer />
        </div>
        <RecentActivityWithFilterContainer filterForSelected={true} />
      </div>
    </div>
    <PageFooterLayout />
  </React.Fragment>
);

ProductDetailsPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default withAuthentication(ProductDetailsPage);
