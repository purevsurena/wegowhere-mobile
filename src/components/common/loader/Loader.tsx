import * as React from 'react';
import { Colors } from '@/constants';
import { Flex } from '@/components/layouts';
import { mScale, scale } from '@/utils/Metrics';
import {
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Platform,
} from 'react-native';

const Loader = () => {
  return (
    <Flex style={styles.container}>
      <Flex jc="center" ai="center" style={styles.loaderContainer}>
        <ActivityIndicator
          size={Platform.select({ android: 'large', ios: 'small' })}
          color={Colors.default.dark}
        />
      </Flex>
    </Flex>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(1, 1, 1, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    zIndex: 99,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  loaderContainer: {
    width: scale(80),
    height: scale(80),
    borderRadius: mScale(16),
    backgroundColor: Colors.default.white,
    shadowColor: Colors.default.dark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
