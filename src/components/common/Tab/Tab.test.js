import React from 'react';
import { shallow } from 'enzyme';
import Tab from './Tab';

describe('Tab component', () => {
  const context = { t: v => v };
  const panes = [
    {
      menuItem: 'pane1',
      render: () => <div className="pane-content">Pane1</div>
    },
    {
      menuItem: 'pane2',
      render: () => <div className="pane-content">Pane2</div>
    }
  ];
  const buildSubject = (props = {}) => {
    const componentProps = {
      panes,
      ...props
    };
    return shallow(<Tab {...componentProps} />, { context });
  };

  it('should render tab menu items', () => {
    const subject = buildSubject();

    expect(subject.find('.ap-tab__menu-item').length).toBe(2);
  });

  it('should render only one active pane', () => {
    const subject = buildSubject();

    expect(subject.find('.pane-content').length).toBe(1);
  });

  it('active tab menu should have active class name', () => {
    const subject = buildSubject({ defaultActiveIndex: 1 });

    expect(subject.find('.ap-tab__menu-item--active').length).toBe(1);
  });

  it('on tab change callback shold be called with index of the clicked pane', () => {
    const paneIndex = 1;
    const props = {
      onTabChange: jest.fn()
    };
    const subject = buildSubject(props);

    subject
      .find('.ap-tab__menu-item')
      .at(paneIndex)
      .simulate('click', { preventDefault() {} });

    expect(props.onTabChange).toHaveBeenCalledWith(paneIndex);
  });
});
