import * as React from 'react';
import { Flex, Screen, WhiteSpace, WingBlank } from '@/components/layouts';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import CustomTextInput from '@/components/common/textInput/TextInput';
import { scale } from '@/utils/Metrics';
import Icons from '@/components/common/images/Icons';
import { CardContext } from '@/context/CardContext';
import { useNavigation } from '@react-navigation/native';

const CardAddScreen = () => {
  const {
    cardHolderName,
    cardNumber,
    expiryDate,
    CVVCode,
    setCardHolderName,
    setCardNumber,
    setExpiryDate,
    setCVVCode,
  } = React.useContext(CardContext);

  const { goBack } = useNavigation();

  return (
    <Screen
      title="Add Card"
      flex={1}
      ai="center"
      isPressRight={false}
      onPressLeft={goBack}>
      <ScrollView style={styles.scrollViewContainer}>
        <WhiteSpace size="14" />

        <CustomTextInput
          type="cardnumber"
          text={cardNumber}
          onChangeText={setCardNumber}
        />
        <WhiteSpace size="22" />

        <CustomTextInput
          type="cardholder"
          text={cardHolderName}
          onChangeText={setCardHolderName}
        />
        <WhiteSpace size="22" />

        <Flex flex={1} fd="row" jc="space-between">
          <CustomTextInput
            type="expiry"
            text={expiryDate}
            onChangeText={setExpiryDate}
            customStyle={{ marginRight: scale(9) }}
          />
          <CustomTextInput
            type="cvv"
            text={CVVCode}
            onChangeText={setCVVCode}
            customStyle={{ marginLeft: scale(9) }}
          />
        </Flex>
        <WhiteSpace size="36" />

        <Flex fd="row" jc="center">
          <Icons name="verifiedVisaCard" width={40} height={20} />
          <WingBlank size="20">
            <Icons name="mastercardSecureCode" width={56} height={20} />
          </WingBlank>
          <Icons name="omiseGrey" width={55} height={20} />
        </Flex>
      </ScrollView>
    </Screen>
  );
};

export default CardAddScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: scale(16),
  },
});
