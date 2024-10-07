import React from 'react';
import PropTypes from 'prop-types';
import LoyaltyTokenContainer from 'apex-web/lib/components/LoyaltyToken/LoyaltyTokenContainer';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './LoyaltyTokenPage.css';

const loyaltyTokenPageClasses = getBEMClasses('loyalty-token-page');

const LoyaltyTokenPage = (props, context) => (
  <div className={loyaltyTokenPageClasses()}>
    <h1 className={loyaltyTokenPageClasses('header')}>
      {context.t('Loyalty Token')}
    </h1>
    <p className={loyaltyTokenPageClasses('description')}>
      {context.t(
        'Using LTC for transaction fees applies a discount to your trading fee. If you hold LTC in your account, you have the option of having your trading fees automatically subtracted from your LTC balance.'
      )}
    </p>
    <LoyaltyTokenContainer />
  </div>
);

LoyaltyTokenPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoyaltyTokenPage;
