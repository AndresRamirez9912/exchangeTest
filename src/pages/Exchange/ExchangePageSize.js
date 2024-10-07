import React from 'react';
import resize from 'apex-web/lib/hocs/resize';
import TradingLayoutContent480Px from '../../layouts/Responsive/TradingLayout/TradingLayoutContent480Px';
import TradingLayoutContent1280Px from '../../layouts/Responsive/TradingLayout/TradingLayoutContent1280Px';
import TradingLayoutContent1440Px from '../../layouts/Responsive/TradingLayout/TradingLayoutContent1440Px';

class ExchangePageSize extends React.Component {
  renderContent = () => {
    let content;
    const short = this.props.height <= 1080;

    if (this.props.width <= 968) {
      content = <TradingLayoutContent480Px />;
    } else if (this.props.width > 968 && this.props.width <= 1280) {
      content = <TradingLayoutContent1280Px short={short} />;
    } else {
      content = <TradingLayoutContent1440Px short={short} />;
    }

    return content;
  };

  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}

export default resize(ExchangePageSize);
