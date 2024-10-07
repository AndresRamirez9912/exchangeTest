import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import './DualFluidHeaderFixedContentLayout.css';

const layoutClasses = getBEMClasses('dual-fluid-header-fixed-content-layout');

const DualFluidHeaderFixedContentLayout = props => (
  <React.Fragment>
    <div className={layoutClasses('accent-bar')} />
    <div className={layoutClasses('header-secondary')}>
      {props.headerSecondary}
    </div>
    <div className={layoutClasses('fixed-container')}>{props.children}</div>
    <div className={layoutClasses('footer')}>{props.footer}</div>
  </React.Fragment>
);

export default DualFluidHeaderFixedContentLayout;
