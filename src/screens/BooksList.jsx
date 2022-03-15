import React, { useState } from 'react'
import { BookItem } from "../components/BookItem"
import { FlatList } from "react-native"
import Books from "../data/books.json"

export const BooksList = () => {

    const [books, setBooks] = useState(Books)

    const renderBook = ({ item }) => (
        <BookItem title={item.title}
            thumbnailUrl={item.thumbnailUrl}
            shortDescription={item.shortDescription}
            authors={item.authors}/>
      );

    return <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={item => item.id}
    />

}