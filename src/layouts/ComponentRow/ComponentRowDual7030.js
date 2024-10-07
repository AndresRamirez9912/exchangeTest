import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import './ComponentRowDual7030.css';

const ComponentRowDual7030 = props => {
  const bemClasses = getBEMClasses('component-row-dual', props.customClass);

  return (
    <div className={bemClasses()}>
      <div
        className={`${bemClasses(
          'component-container-left'
        )} container-with-shadow`}>
        {props.component1}
      </div>
      <div
        className={`${bemClasses(
          'component-container-right'
        )} container-with-shadow`}>
        <div className={bemClasses('component-container-right-content')}>
          {props.component2}
        </div>
      </div>
    </div>
  );
};

export default ComponentRowDual7030;
