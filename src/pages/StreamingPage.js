import React from 'react';
import PropTypes from 'prop-types';
import StreamingLayout from 'apex-web/lib/layouts/StreamingLayouts/StreamingLayout';
import StreamingGridContainer from 'apex-web/lib/components/Streaming/StreamingGridContainer';
import RecentActivityWithFilterContainer from 'apex-web/lib/components/RecentActivityWithFilter';
import BalancesListLayout from 'apex-web/lib/layouts/BalancesListLayout/BalancesListLayout';
import PageFooterLayout from '../layouts/PageFooterLayout/PageFooterLayout';

const StreamingPage = () => (
  <StreamingLayout
    component1={<StreamingGridContainer />}
    component2={<BalancesListLayout />}
    component3={
      <RecentActivityWithFilterContainer
        filterForSelected={false}
        pageSize={10}
        minRow={10}
      />
    }
    footer={<PageFooterLayout />}
  />
);

StreamingPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default StreamingPage;
