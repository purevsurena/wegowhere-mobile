export type ColorProps =
  | 'primary'
  | 'dark'
  | 'semiTransparentBlack'
  | 'mediumGray'
  | 'lightGray'
  | 'white'
  | 'transparent';

export type ColorTypes = {
  [_ in ColorProps]: string;
};
