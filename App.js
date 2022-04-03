import React, { useState } from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './app/Screens/LandingScreen';
import NgoListScreen from './app/Screens/NgoListScreen';
import ConfirmationScreen from './app/Screens/ConfirmationScreen';
import RequestDiscriptionScreen from './app/Screens/RequestDiscriptionScreen';
import ProfileScreen from './app/Screens/ProfileScreen';
import SigninScreen from './app/Screens/SigninScreen';
import SignupScreen from './app/Screens/SignupScreen';
import MenuBar from './app/Components/MenuBar';

const Stack = createNativeStackNavigator();
const hideMenuBarOn = ["RequestDescriptionScreen", "SignupScreen", "SigninScreen"]

export default function App() {
  const [activeScreen, setActiveScreen] = useState()
  const displayMenuBar = hideMenuBarOn.indexOf(activeScreen) === -1


  return (
    <NavigationContainer>
      <Stack.Navigator screenListeners={{
        state: (e) => {
          // Do something with the state
          const index = e.data.state.index
          const screenName = e.data.state.routes[index].name
          setActiveScreen(screenName)
        },
      }}>
        <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false, title: "" }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false, title: "" }} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false, title: "" }} />
        <Stack.Screen name="NgoListScreen" component={NgoListScreen} options={{ headerShown: false, title: "" }} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{ headerShown: true, title: "" }} />
        <Stack.Screen name="RequestDescriptionScreen" component={RequestDiscriptionScreen} options={{ headerShown: true, title: "" }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false, title: "" }} />
      </Stack.Navigator>
      {displayMenuBar && <MenuBar />}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
