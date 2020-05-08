import React from 'react';
import { shallow } from 'enzyme';
import ReviewItem from '../client/src/components/ReviewItem';

describe('<ReviewItem />', () => {
  it('renders the profile picture', () => {
    const wrapper = shallow(<ReviewItem />);
    expect(wrapper.find('.image')).toHaveLength(1);
  });

  it('renders the reviewer\'s name', () => {
    const wrapper = shallow(<ReviewItem />);
    expect(wrapper.find('.name')).toHaveLength(1);
  });

  it('renders the date of publication', () => {
    const wrapper = shallow(<ReviewItem />);
    expect(wrapper.find('.date')).toHaveLength(1);
  });

  it('renders the body text', () => {
    const wrapper = shallow(<ReviewItem />);
    expect(wrapper.find('.desc')).toHaveLength(1);
  });
});
