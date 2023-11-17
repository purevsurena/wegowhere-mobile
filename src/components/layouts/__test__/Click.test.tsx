import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import Click from '@/components/layouts/Click';
import { Text } from 'react-native';

// Mock the RNBounceable module
jest.mock('@freakycoder/react-native-bounceable', () => 'RNBounceable');

describe('<Click />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Click onPress={() => {}} children={<Text>Click Me</Text>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles press event', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Click onPress={onPressMock} testID="click-component">
        <Text>Click Me</Text>
      </Click>,
    );

    fireEvent.press(getByTestId('click-component'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders with disabled state', () => {
    const { getByTestId } = render(
      <Click onPress={() => {}} disabled testID="click-component">
        <Text>Click Me</Text>
      </Click>,
    );

    fireEvent.press(getByTestId('click-component'));
  });

  it('matches snapshot with custom props', () => {
    const tree = renderer
      .create(
        <Click onPress={() => {}} disabled testID="click-component">
          <Text>Click Me</Text>
        </Click>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
