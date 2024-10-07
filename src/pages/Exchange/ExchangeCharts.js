import React from 'react';
import PropTypes from 'prop-types';
import PriceChartContainer from 'apex-web/lib/components/PriceChart/PriceChartContainer';
import DepthChartContainer from 'apex-web/lib/components/DepthChart/DepthChartContainer';
import config from 'apex-web/lib/config';
import TradingLayoutCharts1280Px from 'apex-web/lib/layouts/Responsive/TrandingLayout/TradingLayoutCharts1280Px';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

const tradingLayoutClasses = getBEMClasses('trading-layout');

class ExchangeCharts extends React.Component {
  renderCharts = () => {
    const props = {
      priceChart: PriceChartContainer,
      depthChart: DepthChartContainer,
      showDepthChart: config.TradingLayout.showDepthChart
    };

    if (this.props.width <= 1280) {
      return <TradingLayoutCharts1280Px {...props} />;
    }

    return (
      <React.Fragment>
        <div className={tradingLayoutClasses('chart-header')}>
          {this.context.t('Price Chart')}
        </div>
        <PriceChartContainer />
        {config.TradingLayout.showDepthChart && <DepthChartContainer />}
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.renderCharts()}</React.Fragment>;
  }
}

ExchangeCharts.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ExchangeCharts;
