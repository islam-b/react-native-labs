import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import AppTheme from "./src/consts/app-theme"
import { AuthNavigator } from './src/navigators/AuthNavigator';
import { AppNavigator } from './src/navigators/AppNavigator';
import { NavigationContainer } from "@react-navigation/native"
import { Provider as StoreProvider } from 'react-redux'
import { store, persistor } from "./src/store"
import { PersistGate } from 'redux-persist/integration/react'
import {useIsAuthenticated} from "./src/hooks/useIsAuthenticated"

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={AppTheme}>
          <NavigationContainer theme={AppTheme}>
            <ProtectedNavigation />
          </NavigationContainer>
        </PaperProvider >
      </PersistGate>
    </StoreProvider>
  );
};

const ProtectedNavigation = () => {
  const isAuthenticated = useIsAuthenticated()
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />
}

export default App;