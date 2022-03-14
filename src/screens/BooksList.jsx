import React, {useState}  from 'react'
import {BookItem} from "../components/BookItem"
import {View} from "react-native"

export const BooksList = () => {

    const bookNames = ["Zero to One", "Rich dad poor dad", "The midnight library"]
    const [books, setBooks] = useState(bookNames)

    return <View>
        {books.map(book=> <BookItem name={book} />)}
    </View>
}