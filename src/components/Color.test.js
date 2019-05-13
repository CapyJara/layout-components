import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Dog component', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
