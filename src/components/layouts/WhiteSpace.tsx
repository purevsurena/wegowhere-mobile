import React from 'react';
import { View } from 'react-native';
import { WhiteSpaceProps } from '@/types/layouts';

function WhiteSpace(props: WhiteSpaceProps): JSX.Element {
  const { size = '12', style } = props;
  return <View style={[{ height: parseInt(size, 10) }, style]} />;
}

export default WhiteSpace;
