import React from 'react';
import { SvgXml } from 'react-native-svg';
import { scale } from '@/utils/Metrics';
import { IconTypeProps } from '@/types/icons';
import IConstant from '@/constants/icons';

function Icons({ name, width, height, styles }: IconTypeProps) {
  const src = name && IConstant[name];
  return (
    <SvgXml
      testID={`icon-${name}`}
      width={scale(width)}
      height={scale(height)}
      xml={`${src}`}
      style={{ ...styles }}
    />
  );
}

export default Icons;
