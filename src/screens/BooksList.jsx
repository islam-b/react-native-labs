import React, { useState } from 'react'
import { BookItem } from "../components/BookItem"
import { FlatList } from "react-native"
import Books from "../data/books.json" 
import { TouchableRipple } from 'react-native-paper'

export const BooksList = (props) => {

    const [books, setBooks] = useState(Books)

    const viewDetails = (book) => {
        const navigation = props.navigation
        navigation.navigate('BookDetail', { book })
    }

    const renderBook = ({ item }) => (
        <TouchableRipple onPress={()=>viewDetails(item)}>
            <BookItem title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                shortDescription={item.shortDescription}
                authors={item.authors} />
        </TouchableRipple>
    );

    return <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={item => item.id}
    />

}