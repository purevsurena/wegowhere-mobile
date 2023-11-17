import React from 'react';
import renderer from 'react-test-renderer';
import WhiteSpace from '@/components/layouts/WhiteSpace';

describe('<WhiteSpace />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WhiteSpace size="12" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
