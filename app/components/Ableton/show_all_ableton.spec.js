// tests with jest and enzyme
'use strict'

import React from 'react';
import ShowAllAbleton from './show_all_ableton';

import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import codes from '../../models/__mocks__/codes';

const helpers = require('../utils/helpers');

describe('Test suite for Main component', () => {
  
  it('ShowAllAbleton snapshot', () => {
    const wrapper = shallow(<ShowAllAbleton />);
    wrapper.setState({ results: codes });
    const tree = shallowToJson(wrapper);
    expect(tree).toMatchSnapshot();
  })


  it('ShowAllAbleton component should exist', () => {
    const wrapper = shallow(<ShowAllAbleton />);
    expect(wrapper).toExist;
  });

  it('Same number of codes should render as Code components', () => {
    const wrapper = mount(<ShowAllAbleton />);
    wrapper.setState({ results: codes });
    expect(wrapper.find('CodeTable').length).toEqual(codes.length);
  });

});

