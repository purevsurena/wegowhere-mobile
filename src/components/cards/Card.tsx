import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants';
import { mScale, scale } from '@/utils/Metrics';
import Icons from '@/components/common/images/Icons';
import { Heading } from '@/components/common/typography';
import { Click, Flex, WhiteSpace } from '@/components/layouts';
import { CardProps } from '@/types/modules/Card';

const Card = ({
  cardHolderName,
  expirationDate,
  last4Digits,
  testID,
  onPress,
}: CardProps) => {
  const renderCardNumberDots = () => (
    <Flex fd="row" jc="space-between">
      {Array.from({ length: 3 }, (_, index) => (
        <Heading
          key={index}
          type="Heading4"
          label="••••"
          customStyle={styles.opacityStyle}
        />
      ))}
      <Heading
        type="Heading4"
        label={`${last4Digits}`}
        customStyle={styles.opacityStyle}
      />
    </Flex>
  );

  return (
    <Click testID={testID} onPress={onPress} style={styles.containerStyles}>
      <Icons name="visaFilled" width={66} height={36} />
      <WhiteSpace size="15" />
      {renderCardNumberDots()}
      <WhiteSpace size="14" />

      <Flex fd="row" jc="space-between">
        <Heading
          type="Heading6"
          label="Name on Card"
          color="mediumGray"
          customStyle={styles.opacityStyle}
        />
        <Heading
          type="Heading6"
          label="Expires"
          color="mediumGray"
          customStyle={styles.opacityStyle}
        />
      </Flex>
      <WhiteSpace size="14" />

      <Flex fd="row" jc="space-between">
        <Heading type="Heading5" label={cardHolderName} color="dark" />
        <Heading type="Heading5" label={expirationDate} color="dark" />
      </Flex>
    </Click>
  );
};

export default Card;

const styles = StyleSheet.create({
  containerStyles: {
    width: scale(332),
    height: scale(179),
    backgroundColor: Colors.default.white,
    paddingHorizontal: scale(32),
    paddingRight: scale(71),
    paddingBottom: scale(23),
    paddingTop: scale(28),
    shadowColor: Colors.default.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: mScale(13),
  },
  opacityStyle: {
    opacity: 0.6,
  },
});
