import React from 'react';
import { Route } from 'react-router-dom';
import PageHeaderLayout from '../layouts/PageHeaderLayout/PageHeaderLayout';
import withAuthentication from 'apex-web/lib/hocs/withAuthentication';

import DashboardPage from './DashboardPage';
import MarketDataPage from './MarketDataPage';
import BuySellPage from './BuySellPage';
import ConvertPage from 'apex-web/lib/layouts/ConvertLayout/ConvertLayout';
import WalletsPage from './WalletsPage';
import ProductDetailsPage from './ProductDetailsPage';
// import ComponentExhibitPage from './ComponentExhibitPage/ComponentExhibitPage';
import SettingsPage from './SettingsPage';

import MarginBalancesLayout from 'apex-web/lib/layouts/MarginBalancesLayout/MarginBalancesLayoutContainer';
import AssetActivityDetailsLayout from 'apex-web/lib/layouts/AssetActivityDetailsLayout/AssetActivityDetailsLayout';

import FixedLeftFluidLayout from 'apex-web/lib/layouts/FixedLeftFluidLayout/FixedLeftFluidLayout';
import WalletDetailsBackButtonComponent from 'apex-web/lib/components/WalletDetails/WalletDetailsBackButtonComponent';
import BalancesMenuContainer from 'apex-web/lib/components/BalancesMenu/BalanceMenuContainer';
import WalletDetailsLayout from 'apex-web/lib/layouts/WalletDetailsLayout/WalletDetailsLayout';

import DigitalAssetsPage from 'apex-web/lib/components/DigitalAssets/DigitalAssetsPageContainer';
import DigitalAssetsOfferingProfilePage from 'apex-web/lib/components/DigitalAssets/DigitalAssetsOfferingProfilePageContainer';
import IBALayout from 'apex-web/lib/components/IBA/IbaLayout';
import ExchangePage from './Exchange/ExchangePage';
import StreamingPage from './StreamingPage';

const InteriorPage = () => (
  <React.Fragment>
    <PageHeaderLayout />
    <Route exact path={'/dashboard'} component={DashboardPage} />
    <Route path={'/dashboard/market-data'} component={MarketDataPage} />
    <Route exact path={'/wallets'} component={WalletsPage} />
    <Route
      path="/wallets/wallet-detail"
      component={() => (
        <FixedLeftFluidLayout
          left={[
            <WalletDetailsBackButtonComponent key="1" path="/wallets" />,
            <BalancesMenuContainer key="2" />
          ]}>
          <WalletDetailsLayout />
        </FixedLeftFluidLayout>
      )}
    />
    <Route path={'/exchange'} component={ExchangePage} />
    <Route path={'/buy-sell'} component={BuySellPage} />
    <Route path={'/convert'} component={ConvertPage} />
    <Route path={'/wallets/product-details'} component={ProductDetailsPage} />
    <Route path={'/settings'} component={SettingsPage} />
    {/* <Route path={'/component'} component={ComponentExhibitPage} /> */}
    <Route
      path={'/margin-balances'}
      component={() => (
        <MarginBalancesLayout detailsLink="/wallets/wallet-detail" />
      )}
    />
    <Route
      path={'/asset-activity-details'}
      component={AssetActivityDetailsLayout}
    />
    <Route path={'/iba'} component={IBALayout} />
    <Route path="/eotc" component={StreamingPage} />

    {/* Investor portal Routes */}
    <Route exact path={'/digital-assets'} component={DigitalAssetsPage} />
    <Route
      path={'/digital-assets/:id'}
      component={DigitalAssetsOfferingProfilePage}
    />
  </React.Fragment>
);

export default withAuthentication(InteriorPage);
