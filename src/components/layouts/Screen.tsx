import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ScreenProps } from '@/types/layouts';
import Header from '@/components/common/header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants';

function Screen({
  children,
  title,
  px,
  pb,
  pt,
  ai,
  jc,
  flex,
  onPressLeft,
  onPressRight,
  isPressBack,
  isPressRight,
  barStyle,
}: ScreenProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar showHideTransition="none" barStyle={barStyle} />
        <Header
          isLeftIcon={isPressBack}
          isRightIcon={isPressRight}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
          title={`${title}`}
        />
        <View
          style={{
            flex: flex,
            paddingBottom: pb,
            paddingTop: pt,
            paddingHorizontal: px,
            alignItems: ai,
            justifyContent: jc,
          }}>
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.white,
  },
});
