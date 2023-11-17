import {
  FlexAlignType,
  FlexStyle,
  StatusBarProps,
  ViewStyle,
} from 'react-native';

// Flex element props
export type JustifyContentProps = ViewStyle['justifyContent'];
export type degree = ViewStyle['justifyContent'];
export type FlexWrapProps = FlexStyle['flexWrap'];
export type AlignSelfProps = FlexStyle['alignSelf'];
export type FlexDirectionProps = FlexStyle['flexDirection'];

// Flex props
export type FlexProps = {
  flex?: number;
  fd?: FlexDirectionProps;
  as?: AlignSelfProps;
  ai?: FlexAlignType;
  ac?: JustifyContentProps;
  jc?: JustifyContentProps;
  fw?: FlexWrapProps;
  style?: ViewStyle;
  children: React.ReactNode;
};

// Wingblank props
export type WingBlankSizeProps =
  | '4'
  | '8'
  | '12'
  | '14'
  | '16'
  | '22'
  | '20'
  | '32';

export type WingBlankProps = {
  size?: WingBlankSizeProps;
  style?: ViewStyle;
  children: React.ReactNode;
  testID?: string;
};

// WhiteSpace props
export type WhiteSpaceSizeProps =
  | '4'
  | '8'
  | '10'
  | '12'
  | '13'
  | '14'
  | '15'
  | '17'
  | '18'
  | '20'
  | '22'
  | '24'
  | '32'
  | '36';

export type WhiteSpaceProps = {
  size: WhiteSpaceSizeProps;
  style?: ViewStyle;
};

// Click props
export type ClickProps = {
  onPress: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  testID?: string;
};

export const ClickDefaultProps = {
  disabled: false,
};

// Screen props
export type ScreenProps = {
  flex?: number;
  px?: number;
  pt?: number;
  pb?: number;
  children: React.ReactNode;
  ai?: FlexAlignType;
  jc?: JustifyContentProps;
  barStyle?: StatusBarProps['barStyle'];
  title?: string;
  isPressBack?: boolean;
  isPressRight?: boolean;
  onPressRight?: () => void;
};
