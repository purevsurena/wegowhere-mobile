import React from 'react';
import { View } from 'react-native';
import { FlexProps } from '@/types/layouts';

function Flex(props: FlexProps): JSX.Element {
  const { flex, fd, as, ai, jc, fw, style, children } = props;

  return (
    <View
      style={{
        flex: flex,
        alignSelf: as,
        alignItems: ai,
        justifyContent: jc,
        flexDirection: fd,
        flexWrap: fw,
        ...style,
      }}>
      {children}
    </View>
  );
}

export default Flex;
