import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper';
import AppTheme from "./src/consts/app-theme"
import { HomeNavigator } from './src/navigators/HomeNavigator'
import { NavigationContainer } from "@react-navigation/native"


const App = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <NavigationContainer theme={AppTheme}>
        <HomeNavigator /> 
      </NavigationContainer> 
    </PaperProvider >
  );
};

export default App;