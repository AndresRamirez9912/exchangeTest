import React from 'react';
import PropTypes from 'prop-types';
import InstrumentRowContainer from 'apex-web/lib/components/InstrumentRow';
import PriceChartContainer from 'apex-web/lib/components/PriceChart/PriceChartContainer';
import DepthChartContainer from 'apex-web/lib/components/DepthChart/DepthChartContainer';
import OrderBookContainer from 'apex-web/lib/components/OrderBookComponents/OrderBookContainer';
import RecentTradesContainer from 'apex-web/lib/components/RecentTrades/RecentTradesContainer';
import { getBEMClasses } from 'apex-web/lib/helpers/cssClassesHelper';

import './SimpleExchangePage.css';

const exchangePageClasses = getBEMClasses('simple-exchange-page');

const SimpleExchangePage = (props, context) => {
  return (
    <div className={exchangePageClasses('container')}>
      <div className={exchangePageClasses('row')}>
        <InstrumentRowContainer />
      </div>
      <div className={exchangePageClasses('body')}>
        <div className={exchangePageClasses('chart-container')}>
          <div className={exchangePageClasses('chart-header')}>
            {context.t('Price Chart')}
          </div>
          <PriceChartContainer />
          <DepthChartContainer />
        </div>
        <div className={exchangePageClasses('column-container')}>
          <div className={exchangePageClasses('title')}>
            {context.t('Order Book')}
          </div>
          <OrderBookContainer />
        </div>

        <div className={exchangePageClasses('column-container')}>
          <div className={exchangePageClasses('title')}>
            {context.t('Recent Trades')}
          </div>
          <RecentTradesContainer />
        </div>
      </div>
    </div>
  );
};

SimpleExchangePage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SimpleExchangePage;
