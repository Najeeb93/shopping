
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


export default function App() {
  return (
    <View>
      <Text style={{color: 'red'}}>Hello World</Text>
    </View>
  )
}