import React, { useEffect, useState } from 'react'
import { BookItem } from "../components/BookItem"
import { FlatList } from "react-native"
import { TouchableRipple, ActivityIndicator, Searchbar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { BooksSelectors } from '../store/selectors/books.selectors'
import { getBooks } from "../store/actions/books.actions"
import { flushBooks } from "../store/slices/books.slice"

export const BooksList = (props) => {

    const books = useSelector(BooksSelectors.selectBooks)
    const isLoading = useSelector(BooksSelectors.selectBooksLoading)


    const dispatch = useDispatch()  
    const [query, setQuery] = useState({pageIndex:0, filter: ''});  
    const [flush, setFlush] = useState(false)


    const viewDetails = (book) => {
        const navigation = props.navigation
        navigation.navigate('BookDetail', { book })
    }

    const addNewBook = () => {
        const navigation = props.navigation
        navigation.navigate('NewBook')
    } 

    useEffect(() => {
        dispatch(getBooks({
            skipCount: query.pageIndex * 10,
            maxResultCount: 10,
            filter: query.filter,  
            flush: flush
        })) 
        setFlush(false)
    }, [query]) 

     

    const renderBook = ({ item }) => (
        <TouchableRipple onPress={() => viewDetails(item)}>
            <BookItem title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                shortDescription={item.shortDescription}
                authors={item.authors} />
        </TouchableRipple>
    );

    return <> 

        <Searchbar
            placeholder="Search"
            onChangeText={(filter) => {
                setFlush(true)  
                setQuery({ 
                    filter,
                    pageIndex: 0
                })
            }}
            value={query.filter}
        />

        {isLoading ? <ActivityIndicator style={{ position: 'absolute', right: 0, left: 0, top: 52 }} /> : <></>}


        <FlatList
            data={books}
            renderItem={renderBook}
            keyExtractor={item => item.id}
            onEndReached={() => setQuery({
                ...query,
                pageIndex: query.pageIndex+1
            })}
            onEndReachedThreshold={0.5}
        /> 
    </>

}