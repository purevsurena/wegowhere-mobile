import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '@/components/common/loader/Loader';

test('Loader component renders correctly', () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});
