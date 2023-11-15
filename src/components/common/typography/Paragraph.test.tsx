import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import Paragraph from '@/components/common/typography/Paragraph';
import { Colors } from '@/constants';

describe('Paragraph component', () => {
  test('renders correctly with specified label and default color', () => {
    const { getByText } = render(
      <Paragraph label="Test Paragraph" type="Paragraph1" />,
    );

    // Assert that the component renders with the correct label
    expect(getByText('Test Paragraph')).toBeTruthy();
  });

  test('renders correctly with specified label and lightGray color', () => {
    const { getByText } = render(
      <Paragraph label="Test Paragraph" color="lightGray" />,
    );

    // Assert that the component renders with the correct label
    expect(getByText('Test Paragraph')).toBeTruthy();

    // Assert that the component applies the specified lightGray color
    expect(getByText('Test Paragraph')).toHaveStyle({
      color: Colors.default.lightGray,
    });

    const { toJSON } = render(
      <Paragraph label="Test Paragraph" color="lightGray" />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
