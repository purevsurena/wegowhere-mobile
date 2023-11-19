import { ViewStyle } from 'react-native';

export type TextInputProps = {
  text: string | '';
  onChangeText: (_: string) => void;
  type: 'cardnumber' | 'cvv' | 'expiry' | 'cardholder';
  customStyle?: ViewStyle;
  testID?: string;
};
