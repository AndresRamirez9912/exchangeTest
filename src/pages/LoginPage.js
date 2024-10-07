import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import APIcon from 'apex-web/lib/components/components/common/APIcon';
import redirectIfAuthorized from 'apex-web/lib/hocs/redirectIfAuthorized';
import path from '../helpers/path';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import StandAloneLayout from '../layouts/StandAloneLayout/StandAloneLayout';
import LogoSignup from './images/logo-kiiex-dark-htal.svg';
import LoginFormContainer from 'apex-web/lib/components/Login/LoginFormContainer';

import imagen from '../images/KIIEX-ExchangeLogo.png'

import '../styles/components/common/StandaloneForm.css';
import './LoginPage.css';
import '../styles/theme/keyvisualkiiex.css'; /* KIIEX general style sheet */


const baseClasses = getBEMClasses('standalone-form');
const loginPageClasses = getBEMClasses('login-page');

export const LoginFormComponent = (props, context) => {
  return (

    <StandAloneLayout>
      <div
        className={`${baseClasses('container')} ${loginPageClasses(
          'container'
        )}`}>
        <div
          className={`${baseClasses('header')} ${loginPageClasses('header')}`}
          style={{ backgroundColor: 'white' }}>
         
          <div
            className={`${baseClasses('header-text')} ${loginPageClasses(
              'header-text'
            )}`}>
            <div
              className={`${baseClasses('header-img')} ${loginPageClasses(
                'header-img'
              )}`}>
              <img
                src={LogoSignup}
                alt="KIIEX Logo Signup form"
                style={{ width: '40%' }}
              />

              {context.t('Log In to {n}', {
                n: process.env.REACT_APP_SITE_NAME
              })}
            </div>
   
            {/*<a href="https://kiiex.io" className={baseClasses('close-icon')}>
              <APIcon name="close" classModifiers="big" />
            </a>*/}
            <Link
              to={path('https://kiiex.io')}
              className={baseClasses('close-icon')}>
              <APIcon name="close" classModifiers="big" />
            </Link>
          </div>
        </div>
      </div>

      <LoginFormContainer />

   

      <div className={`${baseClasses('footer')} ${loginPageClasses('footer')}`}>

        <Link
          to={path('/signup')}
          className={loginPageClasses('link')}
          disabled>
          {context.t('Sign Up')}
        </Link>
        <div className={baseClasses('footer-separator')} />
        <Link
          to={path('/problem-logging-in')}
          className={loginPageClasses('link')}
          disabled>
          {context.t('Problem Logging In?')}
        </Link>
      </div>
    </StandAloneLayout>
  );
};

LoginFormComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default redirectIfAuthorized(
  LoginFormComponent,
  process.env.REACT_APP_DEFAULT_PATH
);
