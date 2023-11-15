import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import Heading from '@/components/common/typography/Heading';
import { Colors } from '@/constants';

describe('Heading component', () => {
  test('renders correctly with specified label and default color', () => {
    const { getByText } = render(<Heading label="Test Heading" />);

    // Assert that the component renders with the correct label
    expect(getByText('Test Heading')).toBeTruthy();
  });

  test('renders correctly with specified label and primary color', () => {
    const { getByText } = render(
      <Heading label="Test Heading" color="primary" />,
    );

    // Assert that the component renders with the correct label
    expect(getByText('Test Heading')).toBeTruthy();

    // Assert that the component applies the specified primary color
    expect(getByText('Test Heading')).toHaveStyle({
      color: Colors.default.primary,
    });

    const { toJSON } = render(<Heading label="Test Heading" color="primary" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
