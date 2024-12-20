
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackPramList = {
  Home: undefined;
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackPramList>()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
    name='Home'
    component={Home}
    options={{
      title: 'Trending Products'
    }}
    />
     <Stack.Screen
    name='Details'
    component={Details}
    options={{
      title: 'Products details'
    }}
    />

    </Stack.Navigator>
   </NavigationContainer>
  )
}