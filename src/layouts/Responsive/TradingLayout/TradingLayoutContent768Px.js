import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../../../components/common/Tab/Tab';
import { getBEMClasses } from '../../../helpers/cssClassesHelper';
import OrderEntry from 'apex-web/lib/components/OrderEntryComponents/OrderEntryWithPercentButtonsContainer';
import InstrumentPositions from 'apex-web/lib/components/InstrumentPositions/InstrumentPositionsContainer';

const orderEntryClasses = getBEMClasses('order-entry');

const TradingLayout768Px = (props, context) => {
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

  if (props.short) {
    return (
      <React.Fragment>
        <div className={orderEntryClasses('container')}>
          <Tab panes={_getPanes()} customClass="trading-layout" />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={orderEntryClasses('container')}>
          <OrderEntry />
          <InstrumentPositions />
        </div>
      </React.Fragment>
    );
  }
};

TradingLayout768Px.propTypes = {
  short: PropTypes.bool
};

TradingLayout768Px.defaultProps = {
  short: false
};

TradingLayout768Px.contextTypes = {
  t: PropTypes.func.isRequired
};

export default TradingLayout768Px;
