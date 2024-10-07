import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from './MenuItemComponent';

describe('MenuItemComponent', () => {
  const mockFunc = jest.fn();
  let subject;

  beforeEach(() => {
    jest.clearAllMocks();
    subject = shallow(<MenuItemComponent onItemClick={mockFunc} />);
  });

  it('should call onItemClick function when clicked', () => {
    expect(mockFunc).not.toHaveBeenCalled();
    subject.find('li').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  describe('rendering selected class', () => {
    const className = '.menu-component__item--selected';
    let mountedSubject;

    it('should not have a marker class if it is not selected', () => {
      mountedSubject = mount(
        <MenuItemComponent onItemClick={mockFunc} selected={false} />
      );

      expect(mountedSubject.find(className).length).toBe(0);
    });

    it('should have a marker class if it is selected', () => {
      mountedSubject = mount(
        <MenuItemComponent onItemClick={mockFunc} selected={true} />
      );

      expect(mountedSubject.find(className).length).toBe(1);
    });
  });
});
