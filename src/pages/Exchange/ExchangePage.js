import React from 'react';
import PropTypes from 'prop-types';
import resize from 'apex-web/lib/hocs/resize';
import OrderBook from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import PriceChart from 'apex-web/lib/components/PriceChart/PriceChartContainer';
import DepthChart from 'apex-web/lib/components/DepthChart/DepthChartContainer';
import RecentTrades from 'apex-web/lib/components/RecentTrades/RecentTradesContainer';
import OrderEntry from 'apex-web/lib/components/OrderEntryComponents/OrderEntryWithPercentButtonsContainer';
import InstrumentPositions from 'apex-web/lib/components/InstrumentPositionsWrapper';
import ConfirmLimitOrder from 'apex-web/lib/components/ConfirmLimitOrderModal/ConfirmLimitOrderModalContainer';
import OrderHistoryComponent from 'apex-web/lib/components/OrderHistoryComponents';
import MarginOrderHistoryComponent from 'apex-web/lib/components/OrderHistoryComponents/MarginOrderHistory';
import MarginToggleButtonContainer from 'apex-web/lib/components/MarginToggleButton';
import MarginClosePositionModal from 'apex-web/lib/components/MarginClosePosition/MarginClosePositionModal';
import MarginTransferAssetsModal from 'apex-web/lib/components/MarginTransferAssetModal/MarginTransferAssetsModal';
import config from '../../config';
import { getBEMClasses } from 'apex-web/lib/helpers/cssClassesHelper';
import { connect } from 'react-redux';
import {
  isMarginActiveSelector,
  isMarginEnabledSelector
} from 'apex-web/lib/redux/selectors/marginSelectors';
import 'apex-web/lib/layouts/TradingLayout/TradingLayout.css';
import EstimatedSettlementModal from 'apex-web/lib/components/MarginClosePosition/EstimatedSettlementModal';

import TradingLayoutCharts1280Px from 'apex-web/lib/layouts/Responsive/TrandingLayout/TradingLayoutCharts1280Px';
import TradingLayoutContent480Px from './TradingLayoutContent480px';
import TradingLayoutContent1280Px from './TradingLayoutContent1280px';
import TradingLayoutContent1440Px from './TradingLayoutContent1440px';
import InstrumentRowContainer from './InstrumentRow';

import APIFrame from 'apex-web/lib/components/common/APIFrame/APIFrame';

const tradingLayoutClasses = getBEMClasses('trading-layout');

const TradingLayout = (props, context) => {
  const { height, width, isMarginEnabledSelector, betaOptedIn } = props;

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

  let token = localStorage.getItem('token');

  if (betaOptedIn) {
    return (
      <APIFrame
        src={`https://demo.alphapoint.com/beta?${
          token ? 'session-token=' + token : ''
        }`}
      />
    );
  }

  if (width > 968 && width <= 1280) {
    return (
      <TradingLayoutContent1280Px
        short={height <= 1080}
        {...{
          OrderBook,
          OrderEntry,
          InstrumentPositions,
          RecentTrades
        }}
        {...props}
      />
    );
  }

  if (width > 1280) {
    return (
      <TradingLayoutContent1440Px
        short={height <= 1080}
        {...{
          OrderBook,
          OrderEntry,
          InstrumentPositions,
          RecentTrades
        }}
        {...props}
      />
    );
  }

  return (
    <div className={tradingLayoutClasses('container')}>
      <div className={tradingLayoutClasses('row')}>
        <InstrumentRowContainer />
        {isMarginEnabledSelector && <MarginToggleButtonContainer />}
      </div>

      <div className={tradingLayoutClasses('body')}>
        <div className={tradingLayoutClasses('chart-container')}>
          <TradingLayoutCharts1280Px
            {...{
              PriceChart,
              DepthChart,
              showDepthChart: config.TradingLayout.showDepthChart
            }}
          />
          {renderActivity()}
        </div>
        <TradingLayoutContent480Px
          {...{
            OrderBook,
            OrderEntry,
            InstrumentPositions,
            RecentTrades
          }}
        />
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

TradingLayout.contextTypes = {
  t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { MarginBorrowerEnabled } = state.user.userInfo;

  return {
    betaOptedIn: localStorage.getItem('betaOptedIn'),
    MarginBorrowerEnabled,
    isMarginActive: isMarginActiveSelector(state),
    isMarginEnabledSelector: isMarginEnabledSelector(state),
    config
  };
};

export default connect(mapStateToProps)(resize(TradingLayout));
