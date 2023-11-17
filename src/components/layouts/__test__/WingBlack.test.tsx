import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import WingBlank from '@/components/layouts/WingBlank';
import { Text } from 'react-native';

describe('<WingBlank />', () => {
  it('renders correctly with children', () => {
    const tree = renderer
      .create(
        <WingBlank size="20">
          <Text>Child</Text>
        </WingBlank>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children', () => {
    const { getByText } = render(
      <WingBlank size="16">
        <Text>Test Children</Text>
      </WingBlank>,
    );
    expect(getByText('Test Children')).toBeTruthy();
  });
});
