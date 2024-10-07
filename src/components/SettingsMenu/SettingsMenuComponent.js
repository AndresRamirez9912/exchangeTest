import React from 'react';
import APNavMenuVertical from '../APNavMenuVertical/APNavMenuVertical';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import './SettingsMenuComponent.css';

const SettingsMenuClasses = getBEMClasses('settings-menu');

const SettingMenuItems = [
  { text: 'Profile & Security', path: '/settings/user', icon: 'security' },
/*   { text: 'IBA Settings', path: '/settings/iba', icon: 'sell' }, */
/*   { text: 'Trade Settings', path: '/settings/trade', icon: 'tasks' }, */
  {
    text: 'Verification Level',
    path: '/settings/verification-level',
    icon: 'tasks'
  },
  { text: 'Trade Reports', path: '/settings/trade-reports', icon: 'reports' },
  { text: 'API Keys', path: '/settings/api-keys', icon: 'key' },
  { text: 'User Contacts', path: '/settings/contacts', icon: 'contacts' },
  { text: 'Affiliate Program', path: '/settings/affiliate', icon: 'friends' },
 /*  { text: 'Loyalty Token', path: '/settings/loyalty-token', icon: 'heart' }, */
/*   { text: 'Demo Settings', path: '/settings/demo-settings', icon: 'paint' } */
];

export default class SettingsMenuComponent extends React.Component {
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
        className={SettingsMenuClasses(
          'container',
          this.state.isOpen ? '' : 'closed'
        )}
        ref={node => {
          this.node = node;
        }}>
        <div
          className={SettingsMenuClasses(
            'menu-toggle',
            this.state.isOpen ? 'active' : ''
          )}
          onClick={this.handleClick}>
          {this.context.t('User Settings')}
          <div className={SettingsMenuClasses('triangles-container')}>
            <span className={'triangle-up'} />
            <span className={'triangle-down'} />
          </div>
        </div>
        <APNavMenuVertical
          customClass={SettingsMenuClasses()}
          handleNavItemClick={this.handleClick}
          items={SettingMenuItems}
        />
      </div>
    );
  }
}

SettingsMenuComponent.contextTypes = {
  t: PropTypes.func.isRequired
};
