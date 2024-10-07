import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import path from '../../helpers/path';
import './PageSubHeaderLayout.css';

const pageSubHeaderClasses = getBEMClasses('page-sub-header');

const NavItems = [
  { text: 'Your Snapshot', path: '/dashboard' },
  { text: 'Market Data', path: '/dashboard/market-data' }
];

const PageSubHeaderComponent = (props, context) => (
  <React.Fragment>
    <div className={pageSubHeaderClasses('')}>
      {NavItems.map(link => (
        <NavLink
          exact
          key={link.path}
          to={path(link.path)}
          className={pageSubHeaderClasses('item')}
          activeClassName={pageSubHeaderClasses('item', 'selected')}>
          {context.t(link.text)}
        </NavLink>
      ))}
    </div>
  </React.Fragment>
);

PageSubHeaderComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PageSubHeaderComponent;
