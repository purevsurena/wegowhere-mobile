import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardListScreen from '@/screens/cardList/CardListScreen';
import CardAddScreen from '@/screens/cardAdd/CardAddScreen';
import { SCREENS } from '@/constants/screens';

const RootStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={SCREENS.CARD_LIST} component={CardListScreen} />
        <RootStack.Screen name={SCREENS.CARD_ADD} component={CardAddScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
