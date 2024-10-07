import React from 'react';
import PropTypes from 'prop-types';
import resize from 'apex-web/lib/hocs/resize';

import Tab from 'apex-web/lib/components/common/Tab/Tab';
import { getBEMClasses } from 'apex-web/lib/helpers/cssClassesHelper';
import OrderBookContainer from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import InstrumentRowContainer from 'apex-web/lib/components/InstrumentRow';
import MarginToggleButtonContainer from 'apex-web/lib/components/MarginToggleButton';
import ConfirmLimitOrder from 'apex-web/lib/components/ConfirmLimitOrderModal/ConfirmLimitOrderModalContainer';
import MarginClosePositionModal from 'apex-web/lib/components/MarginClosePosition/MarginClosePositionModal';
import MarginTransferAssetsModal from 'apex-web/lib/components/MarginTransferAssetModal/MarginTransferAssetsModal';
import EstimatedSettlementModal from 'apex-web/lib/components/MarginClosePosition/EstimatedSettlementModal';
import PriceChart from 'apex-web/lib/components/PriceChart/PriceChartContainer';
import DepthChart from 'apex-web/lib/components/DepthChart/DepthChartContainer';
import TradingLayoutCharts1280Px from 'apex-web/lib/layouts/Responsive/TrandingLayout/TradingLayoutCharts1280Px';
import OrderHistoryComponent from 'apex-web/lib/components/OrderHistoryComponents';
import MarginOrderHistoryComponent from 'apex-web/lib/components/OrderHistoryComponents/MarginOrderHistory';
import config from '../../config';

const tradingLayoutClasses = getBEMClasses('trading-layout');
const orderEntryClasses = getBEMClasses('order-entry');
const recentTradeClasses = getBEMClasses('recent-trade');
const orderBookClasses = getBEMClasses('order-book');
const flexTableClasses = getBEMClasses('flex-table');

const TradingLayout1280Px = (props, context) => {
  const renderActivity = () => {
    const { config, isMarginActive } = props;
    const {
      OrderHistoryData: { usePagination },
      TradingLayout: { maxLines }
    } = config;
    const orderHistoryConfig = {
      usePagination,
      maxLines,
      filterMode: 'selectedInstrument'
    };

    return isMarginActive ? (
      <MarginOrderHistoryComponent config={orderHistoryConfig} />
    ) : (
      <OrderHistoryComponent config={orderHistoryConfig} />
    );
  };

  const {
    OrderBook,
    RecentTrades,
    OrderEntry,
    InstrumentPositions,
    short,
    isMarginEnabledSelector
  } = props;

  const _getPanesForFirstColumn = () => {
    return [
      {
        menuItem: context.t('Order Book'),
        render: () => (
          <div className={orderBookClasses('container')}>
            <OrderBook />
          </div>
        )
      },
      {
        menuItem: context.t('Recent Trades'),
        render: () => (
          <div className={recentTradeClasses('container')}>
            <RecentTrades />
          </div>
        )
      }
    ];
  };

  return (
    <div className={tradingLayoutClasses('container')}>
      <div className={tradingLayoutClasses('row')}>
        <InstrumentRowContainer />
        {isMarginEnabledSelector && <MarginToggleButtonContainer />}
      </div>

      <div className={tradingLayoutClasses('body')}>
        <div className={tradingLayoutClasses('chart-container')}>
          {short ? (
            <TradingLayoutCharts1280Px
              short={props.short}
              {...{
                PriceChart,
                DepthChart,
                showDepthChart: config.TradingLayout.showDepthChart
              }}
            />
          ) : (
            <React.Fragment>
              <div className={tradingLayoutClasses('chart-header')}>
                {context.t('Price Chart')}
              </div>
              <PriceChart />
              {config.TradingLayout.showDepthChart && <DepthChart />}
            </React.Fragment>
          )}
        </div>
        {short ? (
          <React.Fragment>
            <div
              className={tradingLayoutClasses(
                'tabs-container',
                'orderbook-container'
              )}>
              <Tab
                panes={_getPanesForFirstColumn()}
                customClass="trading-layout"
              />
            </div>
            <div
              className={orderEntryClasses(
                'container',
                'orderentry-container'
              )}>
              <div className={flexTableClasses('title')}>
                {context.t('Order Entry')}
              </div>
              <OrderEntry />
              <InstrumentPositions />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div
              className={tradingLayoutClasses(
                'tabs-container',
                'orderbook-container'
              )}>
              <Tab
                panes={_getPanesForFirstColumn()}
                customClass="trading-layout"
              />
            </div>
            <div
              className={orderEntryClasses(
                'container',
                'orderentry-container'
              )}>
              <div className={flexTableClasses('title')}>
                {context.t('Order Entry')}
              </div>
              <OrderEntry />
              <InstrumentPositions />
            </div>
          </React.Fragment>
        )}
        <div className={tradingLayoutClasses('activity-container')}>
          {renderActivity()}
        </div>
      </div>
      <ConfirmLimitOrder />
      {isMarginEnabledSelector && (
        <React.Fragment>
          <MarginClosePositionModal />
          <EstimatedSettlementModal />
          <MarginTransferAssetsModal />
        </React.Fragment>
      )}
    </div>
  );
};

TradingLayout1280Px.defaultProps = {
  OrderBook: OrderBookContainer
};

TradingLayout1280Px.propTypes = {
  short: PropTypes.bool,
  OrderBook: PropTypes.func.isRequired,
  RecentTrades: PropTypes.func.isRequired,
  OrderEntry: PropTypes.func.isRequired,
  InstrumentPositions: PropTypes.func.isRequired
};

TradingLayout1280Px.defaultProps = {
  short: false
};

TradingLayout1280Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default resize(TradingLayout1280Px);
