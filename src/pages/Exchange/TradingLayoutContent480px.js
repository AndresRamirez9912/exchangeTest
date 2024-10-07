import React from 'react';
import PropTypes from 'prop-types';

import Tab from 'apex-web/lib/components/common/Tab/Tab';
import { getBEMClasses } from 'apex-web/lib/helpers/cssClassesHelper';

const orderEntryClasses = getBEMClasses('order-entry');

const TradingLayout480Px = (props, context) => {
  const { OrderEntry, InstrumentPositions, RecentTrades, OrderBook } = props;

  const _getPanes = () => {
    return [
      {
        menuItem: context.t('Order Entry'),
        render: () => <OrderEntry />
      },
      {
        menuItem: context.t('Order Book'),
        render: () => <OrderBook />
      },
      {
        menuItem: context.t('Trades'),
        render: () => <RecentTrades />
      }
    ];
  };

  return (
    <div className={orderEntryClasses('container')}>
      <Tab panes={_getPanes()} customClass="trading-layout" />
      <InstrumentPositions />
    </div>
  );
};

TradingLayout480Px.propTypes = {
  short: PropTypes.bool,
  OrderBook: PropTypes.func.isRequired,
  RecentTrades: PropTypes.func.isRequired,
  OrderEntry: PropTypes.func.isRequired,
  InstrumentPositions: PropTypes.func
};

TradingLayout480Px.defaultProps = {
  short: false
};

TradingLayout480Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayout480Px;
