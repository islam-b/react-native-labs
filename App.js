import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import AppTheme from "./src/consts/app-theme"
import { AuthNavigator } from './src/navigators/AuthNavigator';
import { AppNavigator } from './src/navigators/AppNavigator';
import { NavigationContainer } from "@react-navigation/native"
import { Provider as StoreProvider } from 'react-redux'
import {store} from "./src/store"
 
const App = () => {
  
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={AppTheme}>
        <NavigationContainer theme={AppTheme}>
          <AuthNavigator/>
        </NavigationContainer>
      </PaperProvider >
    </StoreProvider>
  );
};

export default App;