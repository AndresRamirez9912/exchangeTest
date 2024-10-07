/* eslint-disable import/first */
import React, { Component } from 'react';
import packageJson from '../package.json';
import { connect } from 'react-redux';
import { Switch, Route, withRouter,Redirect } from 'react-router-dom';
import { initApex, setGateway } from 'apex-web/lib/apex';
import {
  connectionOpened,
  connectionClosed
} from 'apex-web/lib/redux/actions/wsConnectionActions';
import { getQueryParam } from './helpers/queryParamsHelper';
import { onInit } from 'apex-web/lib/redux/actions/lifeCycleActions';
import StandAloneLayout from './layouts/StandAloneLayout/StandAloneLayout';
import './styles/theme/dark.css';
import './styles/theme/keyvisualkiiex.css'; /* KIIEX general style sheet */
import SignupPage from './pages/SignupPage';

import ProblemLoggingInPage from './pages/ProblemLoggingInPage';
import DepositConfirmation from 'apex-web/lib/components/DepositConfirmation/DepositConfirmationModalContainer';
import Snackbar from 'apex-web/lib/components/APSnackbar/APSnackbarContainer';
import TwoFactor from 'apex-web/lib/components/TwoFactorAuthForm/TwoFactorAuthFormContainer';
import SidePane from 'apex-web/lib/components/common/SidePane/SidePaneContainer';
import { emailLinkRoutes } from 'apex-web/lib/helpers/emailLinksHelper';
import EmailLinks from 'apex-web/lib/layouts/EmailLinksLayout.js';
import InteriorPage from './pages/InteriorPage';
import LoginFormContainer from 'apex-web/lib/components/Login/LoginFormContainer';

import { getGateway } from 'apex-web/lib/helpers/wsHelper';
import redirectIfAuthorized from 'apex-web/lib/hocs/redirectIfAuthorized';
import SimpleExchangePage from './pages/Exchange/SimpleExchangePage';
import config from './config';
import Require2FA from 'apex-web/lib/components/2FA/TwoFactorAuthContainer';
import Enable2FA from 'apex-web/lib/components/EnableTwoFactorAuth/StandaloneEnable2FAModalContainer';
import LandingPage from './pages/LandingPage/LandingPage';

import SendReceiveTwoFactorAuthContainer from 'apex-web/lib/components/SendReceiveSidePane/SendReceiveTwoFactorAuth/SendReceiveTwoFactorAuthContainer';

import LogoSignup from './images/KIIEX-ExchangeLogo.png';

class App extends Component {
  constructor(props) {
    super(props);

    const gateway = getGateway();
    if (gateway) {
      setGateway(gateway);
      initApex(this.props.connectionOpened, this.props.connectionClosed);
    }

    const AffiliateTag = getQueryParam('aff');
    if (AffiliateTag) {
      window.localStorage.setItem('affiliateTag', AffiliateTag);
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    const { pathname } = this.props.location;
    const pathsWithLoginLogo = ['/login'];
    const pathsWithLoginBackgroud = [
      '/dashboard',
      '/dashboard/market-data',
      '/exchange',
      '/buy-sell',
      '/wallets'
    ];
    return (
      <React.Fragment>
        <div
          className={
            pathsWithLoginBackgroud.includes(pathname)
              ? 'App fluid container-dashboard'
              : 'App fluid container'
          }>
          <div style={{ textAlign: 'left' }}>
            <a href="https://www.kiiex.io">
              {pathsWithLoginLogo.includes(pathname) && (
                <img
                  src={LogoSignup}
                  alt="KIIEX Logo Signup form"
                  style={{ width: '80%' }}
                />
              )}
            </a>
          </div>
          <Switch>
            <Route
              path="/version"
              render={() => (
                <div>
                  <p>v3implementation-template: {packageJson.version}</p>
                  <p>apex-web: {packageJson.dependencies['apex-web']}</p>
                </div>
              )}
            />
            <Route exact path={'/'}>
              <Redirect to="/login" />
            </Route>
            {emailLinkRoutes(pathname, EmailLinks)}
            <Route
              path={'/login'}
              component={redirectIfAuthorized(
                LoginFormContainer,
                process.env.REACT_APP_DEFAULT_PATH
              )}
            />
            <Route path={'/signup'} component={SignupPage} />
            <Route
              path={'/problem-logging-in'}
              component={ProblemLoggingInPage}
            />
            <Route
              path={'/twofactorauth'}
              render={() => (
                <StandAloneLayout>
                  <TwoFactor />
                </StandAloneLayout>
              )}
            />
            {!isAuthenticated &&
              config.SimpleExchange.active && (
                <Route
                  path={config.SimpleExchange.route}
                  component={SimpleExchangePage}
                />
              )}
            <Route path={'/enabletwofactorauth'} render={() => <Enable2FA />} />
            {/* passing props.location prevents Blocked Re-renders: https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking */}
            <InteriorPage location={this.props.location} />
          </Switch>
        </div>
        <Snackbar />
        <SidePane
          options={{
            ReportBlockTrade: {
              useNewForm: true
            }
          }}
        />
        <DepositConfirmation />
        <Require2FA />
        <SendReceiveTwoFactorAuthContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

const mapDispatchToProps = {
  onInit,
  connectionOpened,
  connectionClosed
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
