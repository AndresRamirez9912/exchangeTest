import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import path from '../../helpers/path';
import MenuItemComponent from '../MenuItem/MenuItemComponent';
import APIcon from 'apex-web/lib/components/common/APIcon';

import './WalletDetailsBackButton.css';

const baseClass = getBEMClasses('wallet-details-back-button');

const WalletDetailsBackButtonComponent = (props, context) => (
  <MenuItemComponent
    customClass={baseClass()}
    onItemClick={() => props.history.push(path(props.path))}>
    <APIcon name="arrowPrevious" customClass={baseClass()} />{' '}
    {context.t('Back to Overview')}
  </MenuItemComponent>
);

WalletDetailsBackButtonComponent.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

export default withRouter(WalletDetailsBackButtonComponent);
