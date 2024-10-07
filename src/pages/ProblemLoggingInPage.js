import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import path from '../helpers/path';
import APIcon from 'apex-web/lib/components/common/APIcon';
import { getBEMClasses } from '../helpers/cssClassesHelper';
import StandAloneLayout from '../layouts/StandAloneLayout/StandAloneLayout';
import redirectIfAuthorized from 'apex-web/lib/hocs/redirectIfAuthorized';

import SimpleProblemLoggingInFormContainer from 'apex-web/lib/components/SimpleProblemLoggingIn/SimpleProblemLoggingInFormContainer';

import '../styles/components/common/StandaloneForm.css';
import './ProblemLoggingInPage.css';


const baseClasses = getBEMClasses('standalone-form');
const problemLoggingInPageClasses = getBEMClasses('problem-logging-in-page');

const ProblemLoggingInPage = (props, context) => (
  <StandAloneLayout>
    <div
      className={`${baseClasses('container')} ${problemLoggingInPageClasses(
        'container'
      )}`}>
      <div
        className={`${baseClasses('header')} ${problemLoggingInPageClasses(
          'header'
        )}`}>
        <div
          className={`${baseClasses(
            'header-text'
          )} ${problemLoggingInPageClasses('header-text')}`}>
          {context.t('Problems Logging In?')}
        </div>
        <Link to={path('/')} className={baseClasses('close-icon')}>
          <APIcon name="close" classModifiers="big" />
        </Link>
      </div>

      <SimpleProblemLoggingInFormContainer
        showOptions
        useEmailAsUsername={false}
      />

      <div
        className={`${baseClasses('footer')} ${problemLoggingInPageClasses(
          'footer'
        )}`}>
        <Link
          to={path('/login')}
          className={problemLoggingInPageClasses('link')}>
          {context.t('Log In')}
        </Link>
      </div>
    </div>
  </StandAloneLayout>
);

ProblemLoggingInPage.contextTypes = {
  t: PropTypes.func.isRequired
};

export default redirectIfAuthorized(
  ProblemLoggingInPage,
  process.env.REACT_APP_DEFAULT_PATH
);
