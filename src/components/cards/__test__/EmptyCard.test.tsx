import React from 'react';
import renderer from 'react-test-renderer';
import EmptyCard from '@/components/cards/EmptyCard';

describe('<EmptyCard />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EmptyCard onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
