import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper';
import AppTheme from "./src/consts/app-theme"
import { AppNavigator } from './src/navigators/AppNavigator'
import { NavigationContainer } from "@react-navigation/native"


const App = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <NavigationContainer theme={AppTheme}>
        <AppNavigator /> 
      </NavigationContainer> 
    </PaperProvider >
  );
};

export default App;