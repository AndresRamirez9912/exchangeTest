import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import APIcon from 'apex-web/lib/components/common/APIcon';

const PageHeaderNavMenuComponent = (props, context) => {
  const { customClass, handleNavItemClick } = props;

  return props.navItems.map(item => (
    <NavLink
      key={item.path}
      to={item.path}
      onClick={handleNavItemClick}
      className={customClass('item', ['hoverable'])}
      activeClassName={customClass('item', ['selected'])}>
      <APIcon name={item.icon} customClass={customClass('icon')} />
      <span className={customClass('label')}>{context.t(item.text)}</span>
    </NavLink>
  ));
};

PageHeaderNavMenuComponent.propTypes = {
  customClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  items: PropTypes.array
};

PageHeaderNavMenuComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PageHeaderNavMenuComponent;
