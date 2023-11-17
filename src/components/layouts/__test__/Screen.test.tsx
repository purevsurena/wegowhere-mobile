import React from 'react';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';
import Screen from '@/components/layouts/Screen';
import { Text } from 'react-native';

describe('<Screen />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Screen title="Test Screen">
          <Text>Screen Content</Text>
        </Screen>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with custom props', async () => {
    const onPressRightMock = jest.fn();
    const { getByText } = render(
      <Screen
        title="Test Screen"
        px={20}
        pb={10}
        pt={5}
        ai="center"
        jc="space-between"
        flex={1}
        onPressRight={onPressRightMock}
        isPressBack
        isPressRight
        barStyle="light-content">
        <Text>Screen Content</Text>
      </Screen>,
    );

    // Wait for StatusBar to update asynchronously
    await waitFor(() => {
      expect(onPressRightMock).toHaveBeenCalledTimes(0); // Ensure onPressRight is not called yet
      expect(getByText('Screen Content')).toBeTruthy();
    });
  });

  it('matches snapshot with custom props', () => {
    const tree = renderer
      .create(
        <Screen
          title="Test Screen"
          px={20}
          pb={10}
          pt={5}
          ai="center"
          jc="space-between"
          flex={1}
          isPressBack
          isPressRight
          barStyle="light-content">
          <Text>Screen Content</Text>
        </Screen>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
