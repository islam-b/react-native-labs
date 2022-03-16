import { createSlice } from '@reduxjs/toolkit'
import Books from "../../data/books.json"

const booksInitialState = {
    items: [],
    totalCount: 0,
    loading: false,
}

const booksSlice = createSlice({
    name: 'books',
    initialState: booksInitialState,
    reducers: {
        getBooks(state) {
            state.items = Books;
            state.totalCount = Books.length;
        },
        addBook(state, action) {
            state.items.push(action.payload);
            state.totalCount+=1;
        },
    }
})

export const {getBooks, addBook} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;