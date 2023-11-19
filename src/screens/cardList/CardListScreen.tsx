import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Screen, WhiteSpace, WingBlank } from '@/components/layouts';
import EmptyCard from '@/components/cards/EmptyCard';
import Card from '@/components/cards/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@/constants/screens';
import { chargeByCard, getUserCards } from '@/api/OpnClient';
import { CardContext } from '@/context/CardContext';
import { formatExpirationDate } from '@/utils/Regex';

const CardListScreen = () => {
  const { cards, setCards } = React.useContext(CardContext);
  const [isLoader, setIsLoader] = React.useState(true);

  const navigation = useNavigation<any>();

  const handlePressAddButton = () => {
    return navigation.navigate(SCREENS.CARD_ADD);
  };

  const fetchUserCards = async () => {
    const { data } = await getUserCards();
    setCards(data);
    setIsLoader(false);
  };

  React.useEffect(() => {
    fetchUserCards();
  }, []);

  const sortedCards = [...cards].sort((a, b) => {
    if (a.created_at && b.created_at) {
      return b.created_at.localeCompare(a.created_at);
    }
    return 0;
  });

  const handlePayment = async (id: string) => {
    setIsLoader(true);
    const res = await chargeByCard(id);
    setIsLoader(false);
    Alert.alert(
      'Payment Confirmation',
      `Thank you for your payment. You have successfully paid ${res.amount} BHT`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
    );
  };

  return (
    <Screen
      title="Cards"
      flex={1}
      ai="center"
      isPressBack={false}
      isLoading={isLoader}
      onPressRight={handlePressAddButton}>
      {!isLoader && cards?.length === 0 && <EmptyCard />}
      {cards?.length > 0 && (
        <ScrollView style={styles.scrollViewContainer}>
          <WhiteSpace size="14" />
          <WingBlank size="22">
            {sortedCards.map(card => (
              <View key={card.id}>
                <Card
                  cardHolderName={card.name}
                  last4Digits={card.last_digits}
                  expirationDate={formatExpirationDate(
                    card.expiration_month,
                    card.expiration_year,
                  )}
                  onPress={() => handlePayment(card.id)}
                />
                <WhiteSpace size="12" />
              </View>
            ))}
          </WingBlank>
        </ScrollView>
      )}
    </Screen>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    width: '100%',
  },
});
