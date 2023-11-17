import * as React from 'react';
import { scale } from '@/utils/Metrics';
import { View, StyleSheet } from 'react-native';
import Icons from '@/components/common/images/Icons';
import { Heading } from '@/components/common/typography';
import { HeaderProps, HeaderDefaultProps } from '@/types/header';
import { Click } from '@/components/layouts';

function Header({
  title,
  isLeftIcon,
  isRightIcon,
  onPressRight,
}: HeaderProps & typeof HeaderDefaultProps) {
  const handleLeftIconPress = () => {};

  const handleRightIconPress = () => {
    if (onPressRight) {
      onPressRight();
    }
  };

  return (
    <View style={styles.container}>
      {isLeftIcon && (
        <Click style={styles.iconStyles} onPress={handleLeftIconPress}>
          <Icons name="backIcon" width={12} height={20} />
        </Click>
      )}

      <Heading label={title} type="Heading2" color="dark" />

      {isRightIcon && (
        <Click style={styles.iconStyles} onPress={handleRightIconPress}>
          <Icons name="addIcon" width={23} height={23} />
        </Click>
      )}
    </View>
  );
}

Header.defaultProps = HeaderDefaultProps;

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyles: {
    paddingHorizontal: scale(14.5),
    paddingVertical: scale(10),
  },
});
