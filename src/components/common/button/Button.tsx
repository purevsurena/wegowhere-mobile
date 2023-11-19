import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';
import { Click } from '@/components/layouts';
import { mScale, scale } from '@/utils/Metrics';
import { Heading } from '@/components/common/typography';
import { ButtonProps } from '@/types/button';

const Button = ({ onPress, title, disabled }: ButtonProps) => {
  return (
    <Click style={styles.button} onPress={onPress} disabled={disabled}>
      <Heading type="Heading3" label={title} color="white" />
    </Click>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: scale(45),
    borderRadius: mScale(22.5),
    backgroundColor: Colors.default.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
