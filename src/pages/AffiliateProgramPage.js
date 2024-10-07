import React from 'react';
import PropTypes from 'prop-types';
import AffiliateActiveTagContainer from 'apex-web/lib/components/AffiliateComponents/AffiliateActiveTagContainer';
import AffiliateCountContainer from 'apex-web/lib/components/AffiliateComponents/AffiliateCountContainer';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import path from '../helpers/path';
import config from '../config';
import './AffiliateProgramPage.css';

const affiliateProgramPageClasses = getBEMClasses('affiliate-program-page');

const AffiliateProgramPage = (props, context) => (
  <div className={affiliateProgramPageClasses()}>
    <div className={affiliateProgramPageClasses('main-header')}>
      <h1 className={affiliateProgramPageClasses('header')}>
        {context.t('Join the {n} Affiliate Program', {
          n: config.global.siteName
        })}
      </h1>
      <p className={affiliateProgramPageClasses('description')}>
        {context.t(
          'Our affiliate program lets you earn a bonus for each successful referral registered to your account. Create an affiliate link below, copy it and email to a friend. Your friends can click on the affiliate link and sign up for an account, at which point you will see the number of affliates increase on this page.'
        )}
      </p>
    </div>
    <div className={affiliateProgramPageClasses('body')}>
      <div className={affiliateProgramPageClasses('container')}>
        <div className={affiliateProgramPageClasses('container-header')}>
          <h1
            className={affiliateProgramPageClasses('container-header--title')}>
            {context.t('Current Active Tag')}
          </h1>
        </div>
        <AffiliateActiveTagContainer
          route={`${window.location.origin}${path('')}/signup?aff=`}
        />
      </div>
      <div className={affiliateProgramPageClasses('container')}>
        <div className={affiliateProgramPageClasses('container-header')}>
          <h1
            className={affiliateProgramPageClasses('container-header--title')}>
            {context.t('Number of Active Affiliates')}
          </h1>
        </div>
        <AffiliateCountContainer />
      </div>
    </div>
  </div>
);

AffiliateProgramPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default AffiliateProgramPage;
