import React from 'react';
import { Text } from 'react-native';
import { ParagraphType, ParagraphDefaultProps } from '@/types/typography';
import Fonts from '@/constants/fonts';
import { Colors } from '@/constants';

function Paragraph({
  color,
  label,
  type,
  customStyle,
  numberOfLines,
  textDecorationLine,
  textAlign,
  children,
}: ParagraphType & typeof ParagraphDefaultProps) {
  const fontVariants = type ? Fonts.paragraph[type] : {};
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          ...fontVariants,
          color: Colors.default[color] || Colors.default.dark,
          textDecorationLine,
          textAlign,
          ...customStyle,
        },
      ]}>
      {label}
      {children}
    </Text>
  );
}

Paragraph.defaultProps = ParagraphDefaultProps;

export default Paragraph;
