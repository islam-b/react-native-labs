import React from 'react'
import { SafeAreaView, StatusBar, View, Dimensions } from "react-native"
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { BooksList } from "./src/screens/BooksList"
import AppTheme from "./src/consts/app-theme"


const App = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <SafeAreaView style={{ display: 'flex' }}>
        <StatusBar />
        <Appbar.Header>
          <Appbar.Content title="BooksApp" />
        </Appbar.Header>
        <View style={{ height: Dimensions.get('window').height }}>
          <BooksList />  
        </View>
      </SafeAreaView>
    </PaperProvider >
  );
};

export default App;