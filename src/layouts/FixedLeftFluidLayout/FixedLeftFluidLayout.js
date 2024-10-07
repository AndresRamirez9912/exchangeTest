import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import './FixedLeftFluidLayout.css';

const layoutClasses = getBEMClasses('fix-left-fluid-layout');

const FixedLeftFluidLayout = props => (
  <React.Fragment>
    {props.showAccent && <div className={layoutClasses('accent-bar')} />}
    <div className={layoutClasses('container')}>
      <div className={layoutClasses('side-bar')}>{props.left}</div>
      <div className={layoutClasses('main')}>{props.children}</div>
    </div>
    <div className={layoutClasses('footer')}>{props.footer}</div>
  </React.Fragment>
);

export default FixedLeftFluidLayout;
