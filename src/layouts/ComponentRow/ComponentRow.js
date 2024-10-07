import React from 'react';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

const ComponentRow = props => {
  const bemClasses = getBEMClasses('component-row', props.customClass);

  const renderComponents = () =>
    props.components.map((component, index) => (
      <div className={bemClasses('component-container')} key={index}>
        {component}
      </div>
    ));

  return <div className={bemClasses()}>{renderComponents()}</div>;
};

export default ComponentRow;
