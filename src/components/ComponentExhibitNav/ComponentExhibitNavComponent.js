import React from 'react';
import APNavMenuVertical from '../APNavMenuVertical/APNavMenuVertical';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import ComponentMap from '../../pages/ComponentExhibitPage/ComponentMap';
import './ComponentExhibitNav.css';

const ComponentExhibitNavClasses = getBEMClasses('component-menu');

const ComponentExhibitNav = () => (
  <APNavMenuVertical
    customClass={ComponentExhibitNavClasses()}
    items={ComponentMap}
  />
);

ComponentExhibitNav.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ComponentExhibitNav;
