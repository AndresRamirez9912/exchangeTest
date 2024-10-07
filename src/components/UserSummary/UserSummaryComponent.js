import React from 'react';
import PropTypes from 'prop-types';
import PopoverMenu from 'apex-web/lib/components/common/PopoverMenu/PopoverMenu';
import APIcon from 'apex-web/lib/components/common/APIcon';
import Spinner from 'apex-web/lib/components/common/Spinner/Spinner';
import { getBEMClasses } from 'apex-web/lib/helpers/cssClassesHelper';

import 'apex-web/lib/components/UserSummary/UserSummaryComponent.css';

class UserSummary extends React.Component {
  static propTypes = {
    selectedAccount: PropTypes.shape({
      AccountName: PropTypes.string.isRequired
    }),
    accounts: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired,
    history: PropTypes.object,
    settingsRoute: PropTypes.string,
    activityRoute: PropTypes.string,
    betaOptedIn: PropTypes.string
  };

  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static defaultProps = {
    settingsRoute: ''
  };

  renderMenuItems = () => {
    const {
      accounts,
      selectedAccount,
      history,
      settingsRoute,
   /*    betaOptedIn */
    } = this.props;
    let menuItems;
    if (accounts.length <= 1) {
      menuItems = [
        {
          label: this.context.t(selectedAccount.AccountName),
          customClass: this.context.t('username-in-dropdown')
        },
        { label: this.context.t('Sign Out'), onClick: this.props.logout }
      ];
    } else {
      menuItems = [
        ...accounts
          .filter(account => account.AccountId !== selectedAccount.AccountId)
          .map(account => {
            return {
              label: this.context.t('Switch to {accountName}', {
                accountName: account.AccountName
              }),
              onClick: () =>
                this.props.selectAccount(account.AccountId, account.OMSID)
            };
          })
      ];
      menuItems.push(
        { divider: true },
        { label: this.context.t('Sign Out'), onClick: this.props.logout }
      );
    }

/*     menuItems.unshift({
      label: this.context.t('Open Beta \u00A0 \u29C9'),
      onClick: () => {
        var win = window.open('https://demo.alphapoint.com/beta', '_blank');
        win.focus();
      }
    });
    menuItems.unshift({
      label: this.context.t(`
        ${betaOptedIn ? 'Disable' : 'Enable'} Beta Features
      `),
      onClick: () => {
        if (betaOptedIn) {
          localStorage.removeItem('betaOptedIn');
        } else {
          localStorage.setItem('betaOptedIn', 'true');
        }
      }
    });
 */
    if (settingsRoute) {
      menuItems.unshift({
        label: this.context.t('Settings'),
        onClick: () => history.push(settingsRoute)
      });
    }

    return menuItems;
  };

  render() {
    const { selectedAccount, customClass } = this.props;
    const bemClasses = getBEMClasses(['user-summary', customClass]);

    return (
      <div className={bemClasses('container')}>
        {selectedAccount ? (
          <PopoverMenu
            customClass={bemClasses()}
            popoverProps={{
              trigger: props => (
                <button
                  className={bemClasses('popover-menu-trigger')}
                  {...props}>
                  <span className={bemClasses('user-info-container')}>
                    <APIcon name="user" customClass={bemClasses('icon')} />
                    <span className={bemClasses('username-in-display')}>
                      {selectedAccount.AccountName}
                    </span>
                    <span
                      className={bemClasses('popover-menu-trigger-triangle')}
                    />
                  </span>
                </button>
              ),
              customClass: 'user-summary'
            }}
            items={this.renderMenuItems()}
          />
        ) : (
          <Spinner isInline customClass={bemClasses} />
        )}
      </div>
    );
  }
}

export default UserSummary;
