import React from 'react';
import PageHeaderNavMenuComponent from './PageHeaderNavMenuComponent';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import APIcon from 'apex-web/lib/components/common/APIcon';

import './PageHeaderNavComponent.css';

const PageHeaderNavClasses = getBEMClasses('page-header-nav');

export default class PageHeaderNavComponent extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    return (
      <div
        className={PageHeaderNavClasses(
          'container',
          this.state.isOpen ? '' : 'closed'
        )}
        ref={node => {
          this.node = node;
        }}>
        <div
          className={PageHeaderNavClasses(
            'menu-toggle',
            this.state.isOpen ? 'active' : ''
          )}
          onClick={this.handleClick}>
          <APIcon
            name="menu-toggle"
            customClass={PageHeaderNavClasses('icon')}
          />
        </div>
        <PageHeaderNavMenuComponent
          customClass={PageHeaderNavClasses}
          handleNavItemClick={this.handleClick}
          navItems={this.props.navItems}
        />
      </div>
    );
  }
}
