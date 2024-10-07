import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { getBEMClasses } from '../../helpers/cssClassesHelper';
import ComponentExhibitNav from '../../components/ComponentExhibitNav/ComponentExhibitNavComponent';
import ComponentMap from './ComponentMap';
import './ComponentExhibitPage.css';

const pageClasses = getBEMClasses('component-exhibit-page');

const ComponentExhibitPage = props => (
  <React.Fragment>
    <div className={pageClasses('container')}>
      <div className={pageClasses('side-bar')}>
        <ComponentExhibitNav />
      </div>
      <div className={pageClasses('main')}>
        <Switch>
          {ComponentMap.map(item => (
            <Route
              path={item.path}
              key={item.text}
              component={item.component}
            />
          ))}
        </Switch>
      </div>
    </div>
  </React.Fragment>
);

export default ComponentExhibitPage;
