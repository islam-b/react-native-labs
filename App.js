import React from 'react'
import { SafeAreaView, StatusBar, View, Dimensions } from "react-native"
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { BooksList } from "./src/screens/BooksList"

const App = () => {
  return (
    <PaperProvider >
      <StatusBar />
      <Appbar.Header>
        <Appbar.Content title="BooksApp" />
      </Appbar.Header>
      <BooksList /> 
    </PaperProvider >
  );
};

export default App;