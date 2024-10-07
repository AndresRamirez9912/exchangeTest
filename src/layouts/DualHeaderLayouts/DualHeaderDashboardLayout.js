import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import DualFluidHeaderFixedContentLayout from '../DualFluidHeaderFixContent/DualFluidHeaderFixedContentLayout';
import ComponentRowDual7030 from '../ComponentRow/ComponentRowDual7030';
import ComponentRowSingle from '../ComponentRow/ComponentRowSingle';
import './DualHeaderDashboardLayout.css';

const layoutClasses = getBEMClasses('dual-header-dashboard-layout');

const DualHeaderDashboardLayout = props => (
  <DualFluidHeaderFixedContentLayout
    headerSecondary={props.headerSecondary}
    footer={props.footer}>
    <ComponentRowSingle
      customClass={`${layoutClasses('notification-row')}`}
      component={props.notificationComponent}
    />
    <ComponentRowDual7030
      customClass={layoutClasses('top-row')}
      component1={props.component1}
      component2={props.component2}
    />
    <ComponentRowSingle
      customClass={`${layoutClasses('bottom-row')} container-with-shadow`}
      component={props.component3}
    />
  </DualFluidHeaderFixedContentLayout>
);

export default DualHeaderDashboardLayout;
