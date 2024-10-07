import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import APLogo from 'apex-web/lib/components/common/APLogo/APLogo';
import './StandAloneLayout.css';

const layoutClasses = getBEMClasses('standalone-layout');

const StandAloneLayout = props => (
  <div className={layoutClasses('wrapper')}>
    <APLogo customClass={layoutClasses('logo')} linkTo="/" />
    {props.children}
  </div>
);

export default StandAloneLayout;
