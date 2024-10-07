import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from 'apex-web/lib/helpers/cssClassesHelper';
import OrderHistoryComponent from 'apex-web/lib/components/OrderHistoryComponents';
import MarginOrderHistoryComponent from 'apex-web/lib/components/OrderHistoryComponents/MarginOrderHistory';
import InstrumentRowContainer from 'apex-web/lib/components/InstrumentRow';
import MarginToggleButtonContainer from 'apex-web/lib/components/MarginToggleButton';
import TradingLayoutCharts1280Px from 'apex-web/lib/layouts/Responsive/TrandingLayout/TradingLayoutCharts1280Px';
import PriceChart from 'apex-web/lib/components/PriceChart/PriceChartContainer';
import DepthChart from 'apex-web/lib/components/DepthChart/DepthChartContainer';
import ConfirmLimitOrder from 'apex-web/lib/components/ConfirmLimitOrderModal/ConfirmLimitOrderModalContainer';
import MarginClosePositionModal from 'apex-web/lib/components/MarginClosePosition/MarginClosePositionModal';
import EstimatedSettlementModal from 'apex-web/lib/components/MarginClosePosition/EstimatedSettlementModal';
import MarginTransferAssetsModal from 'apex-web/lib/components/MarginTransferAssetModal/MarginTransferAssetsModal';
import config from '../../config';

const orderEntryClasses = getBEMClasses('order-entry');
const orderBookClasses = getBEMClasses('order-book');
const recentTradeClasses = getBEMClasses('recent-trade');
const flexTableClasses = getBEMClasses('flex-table');
const tradingLayoutClasses = getBEMClasses('trading-layout');

const TradingLayout1440Px = (props, context) => {
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

  return (
    <div className={tradingLayoutClasses('container')}>
      <div className={tradingLayoutClasses('row')}>
        <InstrumentRowContainer />
        {isMarginEnabledSelector && <MarginToggleButtonContainer />}
      </div>

      <div className={tradingLayoutClasses('body')}>
        <div className={tradingLayoutClasses('chart-container')}>
          {!short ? (
            <React.Fragment>
              <div className={tradingLayoutClasses('chart-header')}>
                {context.t('Price Chart')}
              </div>
              <PriceChart />
              {config.TradingLayout.showDepthChart && <DepthChart />}
            </React.Fragment>
          ) : (
            <TradingLayoutCharts1280Px
              short={short}
              {...{
                PriceChart,
                DepthChart,
                showDepthChart: config.TradingLayout.showDepthChart
              }}
            />
          )}
        </div>

        <React.Fragment>
          <div className={orderBookClasses('container')}>
            <div className={flexTableClasses('title')}>
              {context.t('Order Book')}
            </div>
            <OrderBook />
          </div>

          <div className={recentTradeClasses('container')}>
            <div className={flexTableClasses('title')}>
              {context.t('Recent Trades')}
            </div>
            <RecentTrades />
          </div>
          {short ? (
            <div className={orderEntryClasses('container')}>
              <div className={flexTableClasses('title')}>
                {context.t('Order Entry')}
              </div>
              <OrderEntry />
              <InstrumentPositions showTitle={true} />
            </div>
          ) : (
            <div className={orderEntryClasses('container')}>
              <OrderEntry
                title={
                  <div className={flexTableClasses('title')}>
                    {context.t('Order Entry')}
                  </div>
                }
              />
              <InstrumentPositions />
            </div>
          )}
          <div className={tradingLayoutClasses('activity-container')}>
            {renderActivity()}
          </div>
        </React.Fragment>
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

TradingLayout1440Px.propTypes = {
  OrderBook: PropTypes.func.isRequired,
  RecentTrades: PropTypes.func.isRequired,
  OrderEntry: PropTypes.func.isRequired,
  InstrumentPositions: PropTypes.func.isRequired,
  short: PropTypes.bool
};

TradingLayout1440Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayout1440Px;
