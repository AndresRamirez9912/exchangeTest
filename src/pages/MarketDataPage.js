import React from 'react';
import PropTypes from 'prop-types';
import PageSubHeaderLayout from '../layouts/PageSubHeaderLayout/PageSubHeaderLayout';
import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';
import withAuthentication from 'apex-web/lib/hocs/withAuthentication';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import MarketDataCardsContainer from 'apex-web/lib/components/MarketDataCardsComponent/MarketDataCardsContainer';

const layoutClasses = getBEMClasses('dashboard-page');

const MarketDataPage = (props, context) => (
  <React.Fragment>
    <div className={layoutClasses('accent-bar')} />
    <PageSubHeaderLayout />
    <div className={layoutClasses()}>
      <MarketDataCardsContainer />
    </div>
    <div className={layoutClasses('footer')}>
      <PageFooterLayout />
    </div>
  </React.Fragment>
);

MarketDataPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default withAuthentication(MarketDataPage);
