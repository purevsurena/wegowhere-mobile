import { TextStyle } from 'react-native';
import { ColorProps } from '@/types/colors';
import { Colors } from '@/constants';

export type FontProps = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontStyle: TextStyle['fontStyle'];
  fontWeight: TextStyle['fontWeight'];
  textTransform?: TextStyle['textTransform'];
};

export type TitleTypeProps =
  | 'Heading1'
  | 'Heading2'
  | 'Heading3'
  | 'Heading4'
  | 'Heading5'
  | 'Heading6';

export type ParagraphTypeProps = 'Paragraph1' | 'Paragraph2';

export type HeadingType = {
  color: ColorProps;
  label: string;
  type: TitleTypeProps;
  fontWeight?: TextStyle['fontWeight'];
  numberOfLines?: number;
  customStyle?: TextStyle;
  textDecorationLine?: TextStyle['textDecorationLine'];
  textAlign?: TextStyle['textAlign'];
};

export type ParagraphType = {
  color: ColorProps;
  label: string;
  type: ParagraphTypeProps;
  numberOfLines?: number;
  customStyle?: TextStyle;
  textDecorationLine?: TextStyle['textDecorationLine'];
  children?: React.ReactNode;
  textAlign?: TextStyle['textAlign'];
};

export const HeadingDefaultProps = {
  type: 'Heading1',
  color: Colors.default.dark,
};

export const ParagraphDefaultProps = {
  type: 'Paragraph1',
  color: Colors.default.dark,
};
