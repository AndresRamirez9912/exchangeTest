import React from 'react';
import PropTypes from 'prop-types';
import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';
import withAuthentication from 'apex-web/lib/hocs/withAuthentication';
import WalletCardGridContainer from 'apex-web/lib/components/WalletCards/WalletCardGridContainer';
import WalletRowListContainer from 'apex-web/lib/components/WalletRows/WalletRowListContainer';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './WalletsPage.css';

const layoutClasses = getBEMClasses('wallets-page');

const detailsLink = '/wallets/product-details';

const WalletsPage = (props, context) => (
  <React.Fragment>
    <div className={layoutClasses('accent-bar')} />
    <div className={layoutClasses('container')}>
      <div className={layoutClasses('wallet-list-container-header')}>
        {context.t('Funded Accounts')}
      </div>
      <div className={layoutClasses('wallet-card-container')}>
        <WalletCardGridContainer detailsLink={detailsLink} />
      </div>
      <div className={layoutClasses('wallet-list-container-header')}>
        {context.t('Unfunded Accounts')}
      </div>
      <div className={layoutClasses('wallet-list-container')}>
        <WalletRowListContainer detailsLink={detailsLink} />
      </div>
    </div>
    <div className={layoutClasses('footer')}>
      <PageFooterLayout />
    </div>
  </React.Fragment>
);

WalletsPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default withAuthentication(WalletsPage);
