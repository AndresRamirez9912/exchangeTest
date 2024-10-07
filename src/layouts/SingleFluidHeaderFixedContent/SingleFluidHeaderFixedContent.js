import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import './SingleFluidHeaderFixedContentLayout.css';

const layoutClasses = getBEMClasses('single-fluid-header-fixed-content-layout');

const SingleFluidHeaderFixedContentLayout = props => (
  <React.Fragment>
    <div className={layoutClasses('accent-bar')} />
    <div className={layoutClasses('fixed-container')}>{props.children}</div>
    <div className={layoutClasses('footer')}>{props.footer}</div>
  </React.Fragment>
);

export default SingleFluidHeaderFixedContentLayout;
