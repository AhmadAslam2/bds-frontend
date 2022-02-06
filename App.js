import React from 'react';
import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './app/Screens/LandingScreen';
import ConfirmationScreen from './app/Screens/ConfirmationScreen';
import RequestDiscriptionScreen from './app/Screens/RequestDiscriptionScreen';
import ProfileScreen from './app/Screens/ProfileScreen';
import SigninScreen from './app/Screens/SigninScreen';
import SignupScreen from './app/Screens/SignupScreen';

const Stack = createNativeStackNavigator();

global.donationHistory = [{
  date: new Date().getDate().toString(),
  amount: "1",
  location: "Cantt Medical Hospital Lahore"
},
]

global.requestList = [
  {
    donorName: "Muhammad Bilal",
    location: "Fatima Jinah Hospital Lahore",
    bloodType: "O-",
    amountFilled: "0",
    amountNeeded: 3,
    description: "Diagnosed with Hemophelia need blood urgent",
    diagnosis: "Hemophelia"
  }
]
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: true, title: "Signin" }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: true, title: "Singnup" }} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: true, title: "Home" }} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{ headerShown: true, title: "" }} />
        <Stack.Screen name="RequestDescriptionScreen" component={RequestDiscriptionScreen} options={{ headerShown: true, title: "" }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: true, title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
