import { createSlice } from '@reduxjs/toolkit' 
import {getBooks, addBook} from "../actions/books.actions"
import { BookState, CallStatus } from '../types';


const booksInitialState: BookState = {
    items: [],
    totalCount: 0,
    loading: false, 
    insertStatus: CallStatus.idle
}

const booksSlice = createSlice({
    name: 'books',
    initialState: booksInitialState,
    extraReducers: builder=>{
        builder.addCase(getBooks.pending, (state, action)=>{
            state.loading = true
        });
        builder.addCase(getBooks.fulfilled, (state, action)=>{
            let page = action.payload
            state.items = state.items.concat(page.items)
            state.totalCount = page.totalCount
            state.loading = false 
        });
        builder.addCase(getBooks.rejected, (state, action)=>{
            //TODO handle network errors 
            state.loading = false 
        }); 
        builder.addCase(addBook.pending, (state, action)=>{
            state.insertStatus = CallStatus.pending
        });
        builder.addCase(addBook.fulfilled, (state, action)=>{
            let book = action.payload
            state.items.unshift(book)
            state.insertStatus =  CallStatus.fullfiled
        });
        builder.addCase(addBook.rejected, (state, action)=>{
            state.insertStatus = CallStatus.rejected
        }); 
    },
    reducers: { 
        flushBooks(state, action) {
            state = booksInitialState
        },
    }
})

export const {flushBooks} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;