import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Card from '@/components/cards/Card';

describe('Card Component', () => {
  test('renders correctly', () => {
    const cardHolderName = 'John Doe';
    const expirationDate = '12/24';
    const last4Digits = '3456';
    const { toJSON } = render(
      <Card
        cardHolderName={cardHolderName}
        expirationDate={expirationDate}
        last4Digits={last4Digits}
        onPress={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('calls onPress correctly', () => {
    const onPressMock = jest.fn();
    const cardHolderName = 'John Doe';
    const expirationDate = '12/24';
    const last4Digits = '3456';

    const { getByTestId } = render(
      <Card
        cardHolderName={cardHolderName}
        expirationDate={expirationDate}
        last4Digits={last4Digits}
        testID="test-card"
        onPress={onPressMock}
      />,
    );

    const clickComponent = getByTestId('test-card');
    fireEvent.press(clickComponent);

    expect(onPressMock).toHaveBeenCalled();
  });
});
