export type CardProps = {
  cardHolderName: string;
  expirationDate: string;
  last4Digits: string | number;
  testID?: string;
  onPress: () => void;
};
