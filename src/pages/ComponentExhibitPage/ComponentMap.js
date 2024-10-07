import React from 'react';
import BalancesList from 'apex-web/lib/components/BalancesList';
import TransferRequestNotificationList from 'apex-web/lib/components/TransferRequestsNotification';
import RecentActivityContainer from 'apex-web/lib/components/RecentActivity';
import EotcBuySell from 'apex-web/lib/components/Retail/RetailBuySell/EotcBuySell';
import { BuySellBalancesContainer } from 'apex-web/lib/components/Retail/RetailBuySell';
import WalletCardGridContainer from 'apex-web/lib/components/WalletCards/WalletCardGridContainer';
import MarketOverviewComponent from 'apex-web/lib/components/MarketOverview';
import WalletRowListContainer from 'apex-web/lib/components/WalletRows/WalletRowListContainer';
import KycIdentityMindLegacyForm from 'apex-web/lib/components/KYC_IMLegacy/KYC_IMLegacyForm';
import WalletDetailsContainer from 'apex-web/lib/components/WalletDetails/WalletDetailsContainer';
import RecentActivityWithFilterContainer from 'apex-web/lib/components/RecentActivityWithFilter';
import Transfers from 'apex-web/lib/components/Transfers/TransfersContainer';
import BalancesMenuContainer from 'apex-web/lib/components/BalancesMenu/BalanceMenuContainer';
import MarketDataCardsContainer from 'apex-web/lib/components/MarketDataCardsComponent/MarketDataCardsContainer';
import OrderEntryContainer from 'apex-web/lib/components/OrderEntryComponents/OrderEntryWithPercentButtonsContainer';
import InstrumentPositionsContainer from 'apex-web/lib/components/InstrumentPositions/InstrumentPositionsContainer';
import RecentTradesContainer from 'apex-web/lib/components/RecentTrades/RecentTradesContainer';
import OrderBookContainer from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import OrderHistoryContainer from 'apex-web/lib/components/OrderHistoryComponents';
import PriceChartContainer from 'apex-web/lib/components/PriceChart/PriceChartContainer';
import DepthChartContainer from 'apex-web/lib/components/DepthChart/DepthChartContainer';
import InstrumentRowContainer from 'apex-web/lib/components/InstrumentRow';
import ProfileFormContainer from 'apex-web/lib/components/Settings/ProfileAndSecurity/ProfileSettingsCard/ProfileForm/ProfileFormContainer';
import RegionSettingsContainer from 'apex-web/lib/components/Settings/ProfileAndSecurity/RegionSettingsCard/RegionSettings/RegionSettingsContainer';
import ThemeSettingsContainer from 'apex-web/lib/components/Settings/ProfileAndSecurity/ThemeSettingsCard/ThemeForm/ThemeSettingsContainer';
import ResetPasswordFormComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/PasswordSettingsCard/ResetPasswordForm/ResetPasswordFormComponent';
import EnableTwoFactorAuthContainerFactory from 'apex-web/lib/components/EnableTwoFactorAuth/EnableTwoFactorAuthContainerFactory';
import EnableTwoFactorAuthComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/TwoFactorAuthSettingsCard/EnableTwoFactorAuth/EnableTwoFactorAuthComponent';
import ApiKeyListContainer from 'apex-web/lib/components/ApiKeysSidePaneComponents/ApiKeyList/ApiKeyListContainer';
import ApiKeysSidePaneButtonContainer from 'apex-web/lib/components/Settings/ApiKeys';
import ActivityReportingButtonsContainer from 'apex-web/lib/components/ActivityReportingComponents';
import ScheduledReportsTableContainer from 'apex-web/lib/components/ReportSidePaneComponents/ScheduledReportsTable';
import DownloadReportContainer from 'apex-web/lib/components/ReportSidePaneComponents/DownloadReportForm';
import LoyaltyTokenContainer from 'apex-web/lib/components/LoyaltyToken/LoyaltyTokenContainer';
import AffiliateActiveTagContainer from './ComponentsWrappers/AffiliateActiveTagContainerWrapper';
import AffiliateCountContainer from 'apex-web/lib/components/AffiliateComponents/AffiliateCountContainer';
import AdvancedOrderFormContainer from 'apex-web/lib/components/OrderEntryComponents/AdvancedOrderForm/AdvancedOrderFormContainer';
import RetailFiatSidepane from 'apex-web/lib/components/Retail/RetailSidePanes/FiatSidePaneContainer';
import SendReceiveSidepane from 'apex-web/lib/components/SendReceiveSidePane/SendReceiveSidePaneContainer';
import TradeSettings from 'apex-web/lib/components/Settings/TradeSettings';
import MarginToggleButton from 'apex-web/lib/components/MarginToggleButton';
import MarginBalancesFooter from 'apex-web/lib/components/MarginBalances/MarginBalancesFooter';
import MarginInstrumentBalancesTable from 'apex-web/lib/components/MarginBalances/MarginInstrumentBalancesTable';
import MarginInstrumentPosition from 'apex-web/lib/components/MarginBalances/MarginInstrumentPosition';
import MarginInstrumentPositions from 'apex-web/lib/components/MarginBalances/MarginInstrumentPositions';
import MarginInstrumentSelectorTable from 'apex-web/lib/components/MarginBalances/MarginInstrumentSelectorTable';
import MarginOverview from 'apex-web/lib/components/MarginBalances/MarginOverview';

export default [
  {
    text: 'Instrument Row',
    path: '/component/instrument-row',
    component: InstrumentRowContainer
  },
  {
    text: 'Depth Chart',
    path: '/component/depth-chart',
    component: DepthChartContainer
  },
  {
    text: 'Price Chart',
    path: '/component/price-chart',
    component: PriceChartContainer
  },
  {
    text: 'Order History',
    path: '/component/order-history',
    component: () => (
      <OrderHistoryContainer
        config={{
          usePagination: true,
          maxLines: 6,
          filterMode: 'selectedInstrument'
        }}
      />
    )
  },
  {
    text: 'Order Book',
    path: '/component/order-book',
    component: OrderBookContainer
  },
  {
    text: 'Order Entry',
    path: '/component/order-entry',
    component: OrderEntryContainer
  },
  {
    text: 'Order Entry - Advanced',
    path: '/component/order-entry-advanced',
    component: AdvancedOrderFormContainer
  },
  {
    text: 'Instrument Position',
    path: '/component/instrument-position',
    component: InstrumentPositionsContainer
  },
  {
    text: 'Recent Trades',
    path: '/component/recent-trades',
    component: RecentTradesContainer
  },
  {
    text: 'Balance List Summary',
    path: '/component/balance-list-summary',
    component: BalancesList
  },
  {
    text: 'Transfer Notifications',
    path: '/component/transfer-notifications',
    component: TransferRequestNotificationList
  },
  {
    text: 'Market Overview Chart',
    path: '/component/market-overview-chart',
    component: MarketOverviewComponent
  },
  {
    text: 'Recent Activity',
    path: '/component/recent-activity',
    component: RecentActivityContainer
  },
  {
    text: 'Market Data Cards',
    path: '/component/market-data-cards',
    component: MarketDataCardsContainer
  },
  {
    text: 'eOTC Buy/Sell',
    path: '/component/eotc-buy-sell',
    component: EotcBuySell
  },
  {
    text: 'Buy/Sell Balances',
    path: '/component/buy-sell-balances',
    component: BuySellBalancesContainer
  },
  {
    text: 'Wallet Card Grid',
    path: '/component/wallet-card-grid',
    component: WalletCardGridContainer
  },
  {
    text: 'Wallet Row List',
    path: '/component/wallet-row-list',
    component: WalletRowListContainer
  },
  {
    text: 'KYC Form - IM Legacy',
    path: '/component/kyc-identity-mind-legacy',
    component: KycIdentityMindLegacyForm
  },
  {
    text: 'Profile',
    path: '/component/profile',
    component: ProfileFormContainer
  },
  {
    text: 'Region',
    path: '/component/region',
    component: RegionSettingsContainer
  },
  {
    text: 'Theme',
    path: '/component/theme',
    component: ThemeSettingsContainer
  },
  {
    text: 'Password',
    path: '/component/password',
    component: ResetPasswordFormComponent
  },
  {
    text: 'Two Factor Auth',
    path: '/component/two-factor-auth',
    component: () => {
      const EnableTwoFactorAuthContainer = EnableTwoFactorAuthContainerFactory(
        EnableTwoFactorAuthComponent
      );
      return <EnableTwoFactorAuthContainer />;
    }
  },
  {
    text: 'Api Key List',
    path: '/component/api-key-list',
    component: () => <ApiKeyListContainer customClass={'retail-api-key-list'} />
  },
  {
    text: 'Create Api Key',
    path: '/component/create-api-key',
    component: ApiKeysSidePaneButtonContainer
  },
  {
    text: 'Activity Reporting Buttons',
    path: '/component/activity-reporting-buttons',
    component: ActivityReportingButtonsContainer
  },
  {
    text: 'Scheduled Reports Table',
    path: '/component/scheduled-reports-table',
    component: ScheduledReportsTableContainer
  },
  {
    text: 'Download Report',
    path: '/component/download-report',
    component: DownloadReportContainer
  },
  {
    text: 'Loyalty Token',
    path: '/component/loyalty-token',
    component: LoyaltyTokenContainer
  },
  {
    text: 'Affiliate Active Tag',
    path: '/component/affiliate-active-tag',
    component: AffiliateActiveTagContainer
  },
  {
    text: 'Affiliate Count',
    path: '/component/affiliate-count',
    component: AffiliateCountContainer
  },
  {
    text: 'Wallet Details',
    path: '/component/wallet-details',
    component: WalletDetailsContainer
  },
  {
    text: 'Wallet Details Activity',
    path: '/component/wallet-details-activity',
    component: RecentActivityWithFilterContainer
  },
  {
    text: 'Wallet Details Transfers',
    path: '/component/wallet-details-transfers',
    component: Transfers
  },
  {
    text: 'Wallet Details Menu',
    path: '/component/wallet-details-menu',
    component: BalancesMenuContainer
  },
  {
    text: 'Retail Fiat SidePane',
    path: '/component/retail-fiat-sidepane',
    component: () => (
      <RetailFiatSidepane
        product={{
          ProductId: 1,
          ProductSymbol: 'USD',
          ProductFullName: 'US Dollar',
          iconFileName: 'usd-48px.svg'
        }}
      />
    )
  },
  {
    text: 'Send Receive Sidepane',
    path: '/component/send-receive-sidepane',
    component: () => (
      <SendReceiveSidepane
        product={{
          ProductId: 2,
          ProductSymbol: 'BTC',
          ProductFullName: 'Bitcoin',
          iconFileName: 'btc-48px.svg'
        }}
      />
    )
  },
  {
    text: 'Trade Settings',
    path: '/component/trade-settings',
    component: TradeSettings
  },
  {
    text: 'Margin Toggle Button',
    path: '/component/margin-toggle-button',
    component: MarginToggleButton
  },
  {
    text: 'Margin Balances Footer',
    path: '/component/margin-balances-footer',
    component: MarginBalancesFooter
  },
  {
    text: 'Margin Instrument Balances Table',
    path: '/component/margin-instrument-balances-table',
    component: MarginInstrumentBalancesTable
  },
  {
    text: 'Margin Instrument Position',
    path: '/component/margin-instrument-position',
    component: MarginInstrumentPosition
  },
  {
    text: 'Margin Instrument Positions',
    path: '/component/margin-instrument-positions',
    component: () => <MarginInstrumentPositions showTitle={false} />
  },
  {
    text: 'Margin Instrument Selector Table',
    path: '/component/margin-instrument-selector-table',
    component: MarginInstrumentSelectorTable
  },
  {
    text: 'Margin Overview',
    path: '/component/margin-overview',
    component: () => <MarginOverview showTitle={false} />
  }
];
