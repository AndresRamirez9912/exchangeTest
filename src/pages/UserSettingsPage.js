import React from 'react';
import PropTypes from 'prop-types';
import ProfileSettingsCardComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/ProfileSettingsCard';
import RegionSettingsCardComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/RegionSettingsCard';
import ThemeSettingsCardComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/ThemeSettingsCard';
import EmailSettingsCardComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/EmailSettingsCard/EmailSettingsCard';
import PasswordSettingsCardComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/PasswordSettingsCard';
import TwoFactorAuthSettingsCardComponent from 'apex-web/lib/components/Settings/ProfileAndSecurity/TwoFactorAuthSettingsCard';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import './UserSettingsPage.css';

const userSettingsPageClasses = getBEMClasses('user-settings-page');

const UserSettingsPage = (props, context) => (
  <React.Fragment>
    <div className={userSettingsPageClasses('container')}>
      <div className={userSettingsPageClasses('page-header')}>
        <h1 className={userSettingsPageClasses('title')}>
          {context.t('Update Profile and Security Settings.')}
        </h1>
        <h2 className={userSettingsPageClasses('sub-title')}>
          {context.t(' Here you can make general settings such as...')}
        </h2>
      </div>
      <div className={userSettingsPageClasses('row')}>
        <ProfileSettingsCardComponent />
        <RegionSettingsCardComponent />
      </div>

      <div className={userSettingsPageClasses('row', 'sm')}>
        <ThemeSettingsCardComponent
          themeOptions={[
            {
              value: 'Dark',
              label: context.t('Dark')
            },
            {
              value: 'Light',
              label: context.t('Light')
            }
          ]}
        />
        <EmailSettingsCardComponent />
      </div>

      <div className={userSettingsPageClasses('row', 'sm')}>
        <TwoFactorAuthSettingsCardComponent />
        <PasswordSettingsCardComponent />
      </div>
    </div>
  </React.Fragment>
);

UserSettingsPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default UserSettingsPage;
