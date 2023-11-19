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
  onPressLeft,
  onPressRight,
}: HeaderProps & typeof HeaderDefaultProps) {
  const handleLeftIconPress = () => {
    if (onPressLeft) {
      onPressLeft();
    }
  };

  const handleRightIconPress = () => {
    if (onPressRight) {
      onPressRight();
    }
  };

  return (
    <View style={styles.container}>
      {isLeftIcon ? (
        <Click style={styles.iconStyles} onPress={handleLeftIconPress}>
          <Icons name="backIcon" width={12} height={20} />
        </Click>
      ) : (
        <View style={styles.boxStyles} />
      )}

      <Heading label={title} type="Heading2" color="dark" />

      {isRightIcon ? (
        <Click style={styles.iconStyles} onPress={handleRightIconPress}>
          <Icons name="addIcon" width={23} height={23} />
        </Click>
      ) : (
        <View style={styles.boxStyles} />
      )}
    </View>
  );
}

Header.defaultProps = HeaderDefaultProps;

export default Header;

const styles = StyleSheet.create({
  container: {
    height: scale(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyles: {
    width: scale(44),
    height: scale(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxStyles: {
    width: scale(44),
    height: scale(44),
  },
});
