import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import path from '../../helpers/path';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import APIcon from 'apex-web/lib/components/common/APIcon';

import './APNavMenuVertical.css';

const baseClass = 'nav-menu-vertical';

const APNavMenuVertical = (props, context) => {
  const bemClasses = getBEMClasses(baseClass, props.customClass);

  return (
    <div className={bemClasses()}>
      <ul className={bemClasses('list')}>
        {props.items.filter(i => i.show === undefined || i.show).map(item => (
          <li key={item.path} data-test={item.text}>
            <NavLink
              onClick={
                props.handleNavItemClick ? props.handleNavItemClick : null
              }
              className={bemClasses('item', ['hoverable'])}
              to={path(item.path)}>
              {item.icon && (
                <APIcon
                  name={item.icon}
                  customClass={bemClasses('item-icon')}
                />
              )}
              {context.t(item.text)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

APNavMenuVertical.propTypes = {
  customClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  items: PropTypes.array,
  handleNavItemClick: PropTypes.func
};

APNavMenuVertical.contextTypes = {
  t: PropTypes.func.isRequired
};

export default APNavMenuVertical;
