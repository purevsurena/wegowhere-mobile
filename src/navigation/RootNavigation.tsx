import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardListScreen from '@/screens/cardList/CardListScreen';

const RootStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <RootStack.Screen name="Home" component={CardListScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
