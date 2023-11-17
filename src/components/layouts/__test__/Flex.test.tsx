import React from 'react';
import renderer from 'react-test-renderer';
import Flex from '@/components/layouts/Flex';
import { Text } from 'react-native-svg';

describe('<Flex />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Flex flex={1} fd="row" ai="center" jc="space-between">
          <Text>Child 1</Text>
        </Flex>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
