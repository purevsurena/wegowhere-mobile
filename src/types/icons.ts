import { ImageStyle } from 'react-native';

export type IconProps =
  | 'addIcon'
  | 'backIcon'
  | 'jcb'
  | 'mastercardSecureCode'
  | 'mastercard'
  | 'omiseGrey'
  | 'verifiedVisaCard'
  | 'visaFilled'
  | 'visa';

export type IconTypes = {
  [_ in IconProps]: number | string;
};

export type IconTypeProps = {
  name: IconProps;
  width: number;
  height: number;
  styles?: ImageStyle;
};
