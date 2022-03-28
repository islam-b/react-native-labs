import React from 'react'
import { SafeAreaView, StatusBar, View, Dimensions } from "react-native"
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { BooksList } from "./src/screens/BooksList"

const App = () => {
  return (
    <View>
      <BooksList />
    </View>
  );
};

export default App;