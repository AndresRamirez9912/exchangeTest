import React from 'react';
import PropTypes from 'prop-types';
import redirectIfAuthorized from 'apex-web/lib/hocs/redirectIfAuthorized';
import StandAloneLayout from '../layouts/StandAloneLayout/StandAloneLayout';
import SignupFormContainer from 'apex-web/lib/components/Signup/SignupFormContainer';

import '../styles/components/common/StandaloneForm.css';
import './SignupPage.css';
import '../styles/theme/keyvisualkiiex.css'; /* KIIEX general style sheet */

export const SignupFormComponent = (props, context) => {
  return (

      <StandAloneLayout>
        <SignupFormContainer />
      </StandAloneLayout>

  );
};

SignupFormComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default redirectIfAuthorized(
  SignupFormComponent,
  process.env.REACT_APP_DEFAULT_PATH
);
