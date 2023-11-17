import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';

import { ClickProps, ClickDefaultProps } from '@/types/layouts';

function Click(props: ClickProps): JSX.Element {
  const { onPress, disabled, children, style, testID } = props;

  return (
    <RNBounceable
      testID={`${testID}`}
      onPress={onPress}
      disabled={disabled}
      style={{ ...style }}>
      {children}
    </RNBounceable>
  );
}

Click.defaultProps = ClickDefaultProps;

export default Click;
