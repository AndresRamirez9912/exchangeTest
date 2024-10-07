import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../../../components/common/Tab/Tab';
import { getBEMClasses } from '../../../helpers/cssClassesHelper';
import OrderBook from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import RecentTrades from 'apex-web/lib/components/RecentTrades/RecentTradesContainer';
import OrderEntry from 'apex-web/lib/components/OrderEntryComponents/OrderEntryWithPercentButtonsContainer';
import InstrumentPositions from 'apex-web/lib/components/InstrumentPositions/InstrumentPositionsContainer';

const orderEntryClasses = getBEMClasses('order-entry');
const orderBookClasses = getBEMClasses('order-book');
const recentTradeClasses = getBEMClasses('recent-trade');
const flexTableClasses = getBEMClasses('flex-table');

const TradingLayout1440Px = (props, context) => {
  const short = props.short;

  const _getPanes = () => {
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

  return (
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
          <Tab panes={_getPanes()} customClass="trading-layout" />
        </div>
      ) : (
        <div className={orderEntryClasses('container')}>
          <OrderEntry />
          <InstrumentPositions />
        </div>
      )}
    </React.Fragment>
  );
};

TradingLayout1440Px.propTypes = {
  short: PropTypes.bool
};

TradingLayout1440Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayout1440Px;
