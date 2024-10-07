import React from 'react';
import PropTypes from 'prop-types';

import Tab from '../../../components/common/Tab/Tab';
import { getBEMClasses } from '../../../helpers/cssClassesHelper';

import OrderBook from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import RecentTrades from 'apex-web/lib/components/RecentTrades/RecentTradesContainer';
import OrderEntry from 'apex-web/lib/components/OrderEntryComponents/OrderEntryWithPercentButtonsContainer';
import InstrumentPositions from 'apex-web/lib/components/InstrumentPositions/InstrumentPositionsContainer';

const tradingLayoutClasses = getBEMClasses('trading-layout');
const orderEntryClasses = getBEMClasses('order-entry');
const recentTradeClasses = getBEMClasses('recent-trade');
const orderBookClasses = getBEMClasses('order-book');

const TradingLayout1280Px = (props, context) => {
  const _getPanesForFirstColumn = () => {
    return [
      {
        menuItem: context.t('Order Book'),
        render: () => (
          <div className={orderBookClasses('container')}>
            <OrderBook showTitle={false} />
          </div>
        )
      },
      {
        menuItem: context.t('Recent Trades'),
        render: () => (
          <div className={recentTradeClasses('container')}>
            <RecentTrades showTitle={false} />
          </div>
        )
      }
    ];
  };

  const _getPanesForSecondColumn = () => {
    return [
      {
        menuItem: context.t('Order Entry'),
        render: () => <OrderEntry showTitle={false} />
      },
      {
        menuItem: context.t('Balances'),
        render: () => <InstrumentPositions showTitle={false} />
      }
    ];
  };

  if (props.short) {
    return (
      <React.Fragment>
        <div className={tradingLayoutClasses('tabs-container')}>
          <Tab panes={_getPanesForFirstColumn()} customClass="trading-layout" />
        </div>
        <div className={orderEntryClasses('container')}>
          <Tab
            panes={_getPanesForSecondColumn()}
            customClass="trading-layout"
          />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={tradingLayoutClasses('tabs-container')}>
          <Tab panes={_getPanesForFirstColumn()} customClass="trading-layout" />
        </div>
        <div className={orderEntryClasses('container')}>
          <OrderEntry />
          <InstrumentPositions />
        </div>
      </React.Fragment>
    );
  }
};

TradingLayout1280Px.propTypes = {
  short: PropTypes.bool
};

TradingLayout1280Px.defaultProps = {
  short: false
};

TradingLayout1280Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayout1280Px;
