import * as React from 'react';
import { Screen } from '@/components/layouts';
import EmptyCard from '@/components/cards/EmptyCard';

const CardListScreen = () => {
  return (
    <Screen title="Cards" flex={1} jc="center" ai="center">
      <EmptyCard />
    </Screen>
  );
};

export default CardListScreen;
