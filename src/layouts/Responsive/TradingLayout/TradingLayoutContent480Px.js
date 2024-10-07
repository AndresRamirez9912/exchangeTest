import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../../../components/common/Tab/Tab';
import OrderEntry from 'apex-web/lib/components/OrderEntryComponents/OrderEntryWithPercentButtonsContainer';
import InstrumentPositions from 'apex-web/lib/components/InstrumentPositions/InstrumentPositionsContainer';
import OrderBook from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import RecentTrades from 'apex-web/lib/components/RecentTrades/RecentTradesContainer';
import { getBEMClasses } from '../../../helpers/cssClassesHelper';

const orderEntryClasses = getBEMClasses('order-entry');

const TradingLayout468Px = (props, context) => {
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
      },
      {
        menuItem: context.t('Balances'),
        render: () => <InstrumentPositions showTitle={false} />
      }
    ];
  };

  return (
    <div className={orderEntryClasses('container')}>
      <Tab panes={_getPanes()} customClass="trading-layout" />
    </div>
  );
};

TradingLayout468Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayout468Px;
