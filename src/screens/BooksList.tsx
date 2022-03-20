import React, { useEffect, useState } from 'react'
import { BookItem } from "../components/BookItem"
import { FlatList } from "react-native"
import { TouchableRipple, ActivityIndicator, FAB } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { BooksSelectors } from '../store/selectors/books.selectors'
import { getBooks } from "../store/actions/books.actions"
import { flushBooks } from "../store/slices/books.slice"
import { BookDto } from '../data/dtos/book'

export const BooksList: React.FC<BooksListPropType> = (props:BooksListPropType) => {

    const books = useSelector(BooksSelectors.selectBooks)
    const isLoading = useSelector(BooksSelectors.selectBooksLoading)


    const dispatch = useDispatch()
    const [pageIndex, setPageIndex] = useState(0)

    const viewDetails = (book: BookDto) => {
        const navigation = props.navigation
        navigation.navigate('BookDetail', { book })
    }

    const addNewBook = () => {
        const navigation = props.navigation
        navigation.navigate('NewBook')
    } 

    useEffect(() => {
        dispatch(flushBooks({}))
    })

    useEffect(() => {
        dispatch(getBooks({
            skipCount: pageIndex * 10,
            maxResultCount: 10
        }))
    }, [pageIndex])

    const renderBook = ({ item }: {item: BookDto}) => (
        <TouchableRipple onPress={() => viewDetails(item)}>
            <BookItem title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                shortDescription={item.shortDescription}
                authors={item.authors} />
        </TouchableRipple>
    );

    return <>
        {isLoading ? <ActivityIndicator style={{ position: 'absolute', right: 0, left: 0, top: 16 }} /> : <></>}
        <FlatList
            data={books}
            renderItem={renderBook}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => setPageIndex(pageIndex + 1)}
            onEndReachedThreshold={0.5}
        />

        <FAB
            style={{ position: 'absolute', right: 16, bottom: 16 }}
            icon="plus"
            onPress={addNewBook}
        />
    </>

}

interface BooksListPropType {
    navigation: any
}