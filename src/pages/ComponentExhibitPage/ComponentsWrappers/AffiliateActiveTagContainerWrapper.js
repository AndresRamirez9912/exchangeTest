import React from 'react';
import AffiliateActiveTagContainer from 'apex-web/lib/components/AffiliateComponents/AffiliateActiveTagContainer';
import path from 'apex-web/lib/helpers/path';

const AffiliateActiveTagContainerWrapper = props => {
  return (
    <AffiliateActiveTagContainer
      route={`${window.location.origin}${path('')}/signup?aff=`}
    />
  );
};

export default AffiliateActiveTagContainerWrapper;
