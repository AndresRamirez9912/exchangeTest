import React from 'react';
import PropTypes from 'prop-types';

import Tab from '../../../components/common/Tab/Tab';
import { getBEMClasses } from '../../../helpers/cssClassesHelper';

const tradingLayoutClasses = getBEMClasses('trading-layout');

const TradingLayoutCharts1280Px = (props, context) => {
  const {
    priceChart: PriceChart,
    depthChart: DepthChart,
    showDepthChart
  } = props;

  const _getPanes = () => {
    const chartsArray = [
      {
        menuItem: context.t('Price Chart'),
        render: () => <PriceChart />
      },
      {
        menuItem: context.t('Depth Chart'),
        render: () => <DepthChart smallScreen />
      }
    ];

    if (!showDepthChart) {
      return chartsArray.filter(item => item.menuItem !== 'Depth Chart');
    }

    return chartsArray;
  };

  return (
    <div className={tradingLayoutClasses('chart-tabs-container')}>
      <Tab panes={_getPanes()} customClass="trading-layout" />
    </div>
  );
};

TradingLayoutCharts1280Px.propTypes = {
  priceChart: PropTypes.func.isRequired,
  depthChart: PropTypes.func.isRequired,
  showDepthChart: PropTypes.bool.isRequired
};

TradingLayoutCharts1280Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayoutCharts1280Px;
