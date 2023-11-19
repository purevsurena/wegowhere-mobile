import * as React from 'react';
import { Flex, Screen, WhiteSpace, WingBlank } from '@/components/layouts';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert, StyleSheet } from 'react-native';
import CustomTextInput from '@/components/common/textInput/TextInput';
import { scale } from '@/utils/Metrics';
import Icons from '@/components/common/images/Icons';
import { CardContext } from '@/context/CardContext';
import { useNavigation } from '@react-navigation/native';
import { addCardForUserByToken, createCardToken } from '@/api/OpnClient';
import { CardTokenRequest } from '@/types/modules/Card';
import FadeAnimation from '@/animation/Fade';
import Button from '@/components/common/button/Button';

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
    setCards,
    cleanAddCard,
  } = React.useContext(CardContext);

  const { goBack } = useNavigation();
  const [isLoader, setIsLoader] = React.useState(false);

  const handleSaveCard = async () => {
    try {
      const data: CardTokenRequest = {
        card: {
          name: cardHolderName,
          number: cardNumber,
          expiration_month: Number(expiryDate.slice(0, 2)),
          expiration_year: Number(expiryDate.slice(-2)),
          security_code: CVVCode,
        },
      };

      setIsLoader(true);
      const cardToken = await createCardToken(data);
      if (cardToken?.id) {
        const cards = await addCardForUserByToken(cardToken?.id);
        if (cards?.data?.length > 0) {
          setCards(cards.data);
          cleanAddCard();
          setIsLoader(false);
          return goBack();
        }
      } else {
        setIsLoader(false);

        Alert.alert(
          'Error',
          'There was an issue with your card information. Please review and try again.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        );
      }
    } catch (error) {
      setIsLoader(false);
    }
  };

  return (
    <Screen
      title="Add Card"
      flex={1}
      ai="center"
      isLoading={isLoader}
      isPressRight={false}
      onPressLeft={goBack}>
      <FadeAnimation isFadeIn duration={1000} style={styles.container}>
        <Flex flex={1}>
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
          <WingBlank size="22" style={{}}>
            <Button title="Add Card" onPress={handleSaveCard} />
            <WhiteSpace size="18" />
          </WingBlank>
        </Flex>
      </FadeAnimation>
    </Screen>
  );
};

export default CardAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollViewContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: scale(16),
  },
});
