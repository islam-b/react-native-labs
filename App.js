import React from 'react'
import { SafeAreaView, StatusBar, View, Dimensions } from "react-native"
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { BooksList } from "./src/screens/BooksList"

const App = () => {
  return (
    <PaperProvider >
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