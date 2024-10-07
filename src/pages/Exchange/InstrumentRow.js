import React from 'react';
import InstrumentSelectorContainer from 'apex-web/lib/components/InstrumentSelector/InstrumentSelectorContainer';
import InstrumentTableContainer from 'apex-web/lib/components/InstrumentTable/InstrumentTableContainer';
import { getBEMClasses } from '../../helpers/cssClassesHelper';

import 'apex-web/lib/components/InstrumentRow/InstrumentRowComponent.css';

const baseClasses = getBEMClasses('instrument-row');

const InstrumentRowComponent = () => {
  return (
    <div className={baseClasses()}>
      <InstrumentSelectorContainer />
      <InstrumentTableContainer />
    </div>
  );
};

export default InstrumentRowComponent;
