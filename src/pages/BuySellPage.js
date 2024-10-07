import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import withAuthentication from 'apex-web/lib/hocs/withAuthentication';
import {
  BuySellContainer,
  BuySellMakeTransactionContainer,
  BuySellBalancesContainer,
  BuySellOrderOverviewContainer
} from 'apex-web/lib/components/Retail/RetailBuySell';
import 'apex-web/lib/layouts/Responsive/EotcBuySellLayout/EotcBuySellDesktopLayout.css';

import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';


import './BuySellPage.css';

const classes = getBEMClasses('eotc-buy-sell-layout');

const BuySellPage = (props, context) => (
  <React.Fragment>
    <div className={classes('accent-bar')} />
    <div className={classes('container')}>
      <div className={classes('col', ['lg'])}>
        <div
          className={classes(
            'make-transaction-container container-with-shadow'
          )}>
          <div className={classes('make-transaction-col-1 ')}>
            <BuySellMakeTransactionContainer>
              <BuySellContainer />
            </BuySellMakeTransactionContainer>
          </div>

          <div className={classes('make-transaction-col-2')}>
            <div className={classes('order-overview-container')}>
              <BuySellOrderOverviewContainer displayPricePerUnit />
            </div>

            <hr className={classes('right-panel-divider')} />

            <div className={classes('balances-container ')}>
              <div className={classes('balances-title')}>
                {context.t('Balances')}
              </div>
              <BuySellBalancesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes('footer')}>
      <PageFooterLayout />
    </div>
  </React.Fragment>
);

BuySellPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default withAuthentication(BuySellPage);
