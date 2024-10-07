import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getBEMClasses } from '../../../helpers/cssClassesHelper';

import './Tab.css';

export default class Tab extends Component {
  static propTypes = {
    onTabChange: PropTypes.func,
    panes: PropTypes.arrayOf(
      PropTypes.shape({
        menuItem: PropTypes.string.isRequired,
        render: PropTypes.func.isRequired,
        onSelect: PropTypes.func
      })
    ).isRequired,
    customClass: PropTypes.string,
    classModifiers: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    defaultActiveIndex: PropTypes.number
  };

  static defaultProps = {
    customClass: 'custom-tab',
    classModifiers: [],
    defaultActiveIndex: 0,
    onTabChange: () => {}
  };

  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.defaultActiveIndex
    };
  }

  handleTabChange(e, index) {
    e.preventDefault();
    this.props.onTabChange(index);
    this.setState({ activeIndex: index });
  }

  getClasses() {
    return getBEMClasses(['ap-tab', this.props.customClass]);
  }

  _renderMenu() {
    const classes = this.getClasses();

    return (
      <div className={classes('menu', this.props.classModifiers)}>
        {this._renderMenuItems()}
      </div>
    );
  }

  _renderMenuItems() {
    const { panes, classModifiers } = this.props;
    const classes = this.getClasses();

    return panes.map((pane, index) => {
      const activeClassName =
        this.state.activeIndex === index
          ? classes(
              'menu-item',
              ['active'].concat(classModifiers.map(i => `${i}-active`))
            )
          : '';
      return (
        <div
          className={classnames(
            activeClassName,
            classes('menu-item', classModifiers)
          )}
          onClick={e => {
            if (pane.onSelect) {
              pane.onSelect();
            }
            this.handleTabChange(e, index);
          }}
          key={pane.menuItem}
          data-test={pane.menuItem}>
          {this.context.t(pane.menuItem)}
        </div>
      );
    });
  }

  render() {
    const { panes, classModifiers } = this.props;
    const currentPane = panes[this.state.activeIndex];
    const classes = this.getClasses();

    return (
      <div className={`${classes('tab', classModifiers)}`}>
        {this._renderMenu()}
        <div className={classes('tab-content', classModifiers)}>
          {currentPane.render()}
        </div>
      </div>
    );
  }
}
