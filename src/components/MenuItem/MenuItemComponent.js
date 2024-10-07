import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import '../Menu/MenuComponent.css';

const baseClass = 'menu-component';

class MenuItemComponent extends React.Component {
  getBEMClasses = () => {
    return getBEMClasses(baseClass, this.props.customClass);
  };

  render() {
    const bemClasses = this.getBEMClasses();

    return (
      <li
        className={bemClasses('item', this.props.selected && 'selected')}
        onClick={this.props.onItemClick}>
        {this.props.children}
      </li>
    );
  }
}

MenuItemComponent.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  customClass: PropTypes.string
};

export default MenuItemComponent;
