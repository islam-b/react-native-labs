import { createSlice } from '@reduxjs/toolkit'
import Books from "../../data/books.json"
import {getBooks} from "../actions/books.actions"

const booksInitialState = {
    items: [],
    totalCount: 0,
    loading: false,
}

const booksSlice = createSlice({
    name: 'books',
    initialState: booksInitialState,
    extraReducers: builder=>{
        builder.addCase(getBooks.pending, (state, action)=>{
            state.loading = true
        });
        builder.addCase(getBooks.fulfilled, (state, action)=>{
            let {page, flush} = action.payload
            if (flush) {
                state.items = page.items
            } else {
                state.items = state.items.concat(page.items)
            }
            state.totalCount = page.totalCount
            state.loading = false 
        });
        builder.addCase(getBooks.rejected, (state, action)=>{
            //TODO handle network errors 
            state.loading = false 
        }); 
    },
    reducers: { 
        flushBooks(state, action) {
            state.items = booksInitialState.items
            state.totalCount = booksInitialState.totalCount
            state.loading = booksInitialState. loading
        },
        addBook(state, action) {
            state.items.push(action.payload);
            state.totalCount+=1;
        },
    }
})

export const {flushBooks, addBook} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;