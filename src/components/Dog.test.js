import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('header', () => {
  it('renders a Dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
