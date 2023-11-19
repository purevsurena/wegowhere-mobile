import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '@/components/common/button/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button onPress={() => {}} title="Press Me" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Press Me" />,
    );
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders correctly when disabled', () => {
    const { toJSON } = render(
      <Button onPress={() => {}} title="Press Me" disabled />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('does not call onPress when disabled button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} title="Press Me" disabled />,
    );
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
