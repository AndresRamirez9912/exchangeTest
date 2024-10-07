import React from 'react';
import PropTypes from 'prop-types';

import { getBEMClasses } from '../../helpers/cssClassesHelper';
import config from '../../config';
import './PageFooterLayout.css';
import '../../styles/theme/keyvisualkiiex.css';
import LogoFooter from '../../images/logo-kiiex-dark-htal.svg';
import Link from '../../components/common/Link';
import APIcon from 'apex-web/lib/components/common/APIcon';

const pageFooterClasses = getBEMClasses('page-footer');

const PageFooterLayout = (props, context) => {
  return (
    <footer className={pageFooterClasses()}>
      <div className={pageFooterClasses('footer-left-content')}>
      <div style={{ textAlign: 'center' }}>
          <img
            src={LogoFooter}
            alt="KIIEX Logo Footer Section"
            style={{ width: '30%', marginBottom: '20px' }}
          />
        </div>
        <div>
          {context.t('KIIEX™ {y}. All Rights Reserved.', {
            n: process.env.REACT_APP_SITE_NAME,
            y: new Date().getFullYear()
          })}
        </div>
      </div>
      <div
        className={pageFooterClasses('footer-right-content')}
        style={{ textAlign: 'right' }}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <a href="https://kiiex.io/terminosycondiciones" target='_blank'>
              Términos y Condiciones
            </a>
          </li>
          <li>
            <a href="https://kiiex.io/politicadeprivacidad" target='_blank'>
              Política de Privacidad
            </a>
          </li>
          <li>
            <a href="mailto: soporte@kiiex.io">soporte@kiiex.io</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

PageFooterLayout.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PageFooterLayout;
