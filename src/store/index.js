import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './slices/books.slice'
import { authReducer } from './slices/auth.slice'


export const store = configureStore({
    reducer: {
        books: booksReducer,
        auth: authReducer
    },
})