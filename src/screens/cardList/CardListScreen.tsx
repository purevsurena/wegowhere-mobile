import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Screen, WhiteSpace, WingBlank } from '@/components/layouts';
import EmptyCard from '@/components/cards/EmptyCard';
import Card from '@/components/cards/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@/constants/screens';

const dummyCards = [
  {
    id: Math.random(),
    cardHolderName: 'Ty Lee',
    last4Digits: '3282',
    expirationDate: '12/25',
  },
];

const CardListScreen = () => {
  const [cards] = React.useState(dummyCards);

  const navigation = useNavigation<any>();

  const handlePressAddButton = () => {
    return navigation.navigate(SCREENS.CARD_ADD);
  };
  return (
    <Screen
      title="Cards"
      flex={1}
      ai="center"
      isPressBack={false}
      onPressRight={handlePressAddButton}>
      {cards.length === 0 && <EmptyCard />}
      {cards.length > 0 && (
        <ScrollView style={styles.scrollViewContainer}>
          <WhiteSpace size="14" />
          <WingBlank size="22">
            {cards.map(card => (
              <Card
                key={card.id}
                cardHolderName={card.cardHolderName}
                last4Digits={card.last4Digits}
                expirationDate={card.expirationDate}
                onPress={() => {}}
              />
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
