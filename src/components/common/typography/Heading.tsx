import React from 'react';
import { Text } from 'react-native';
import { HeadingType, HeadingDefaultProps } from '@/types/typography';
import Fonts from '@/constants/fonts';
import { Colors } from '@/constants';
function Heading({
  color,
  label,
  type,
  customStyle,
  numberOfLines,
  textDecorationLine,
  textAlign,
}: HeadingType & typeof HeadingDefaultProps) {
  const fontVariants = type ? Fonts.heading[type] : {};
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
    </Text>
  );
}

Heading.defaultProps = HeadingDefaultProps;

export default Heading;
