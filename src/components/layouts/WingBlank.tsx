import React from 'react';
import { View } from 'react-native';
import { WingBlankProps } from '@/types/layouts';

function WingBlank(props: WingBlankProps): JSX.Element {
  const { size = '16', style = {}, children, testID } = props;
  return (
    <View
      testID={testID}
      style={{
        marginLeft: parseInt(size, 10),
        marginRight: parseInt(size, 10),
        ...style,
      }}>
      {children}
    </View>
  );
}

export default WingBlank;
