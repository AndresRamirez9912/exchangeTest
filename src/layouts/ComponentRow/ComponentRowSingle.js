import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import './ComponentRowSingle.css';

const ComponentRowSingle = (props, context) => {
  const bemClasses = getBEMClasses('component-row-single', props.customClass);

  return (
    <React.Fragment>
      {props.header && (
        <div className={bemClasses('header')}>{context.t(props.header)}</div>
      )}
      <div className={bemClasses()}>
        <div className={bemClasses('component-container-100')}>
          {props.component}
        </div>
      </div>
    </React.Fragment>
  );
};

ComponentRowSingle.propTypes = {
  component: PropTypes.object,
  customClass: PropTypes.string,
  header: PropTypes.string
};

ComponentRowSingle.contextTypes = {
  t: PropTypes.func.isRequired
};

export default ComponentRowSingle;
