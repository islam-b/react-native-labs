import { createSelector } from '@reduxjs/toolkit'
import { Store } from '../types'

const booksState = (state: Store) => state.books //same name as the slice

const selectBooksCount = createSelector(booksState, (books) => books.totalCount)

const selectBooks = createSelector(booksState, (books) => books.items)

const selectBooksLoading = createSelector(booksState, (books) => books.loading)

const selectInsertStatus = createSelector(booksState, (books) => books.insertStatus)

export const BooksSelectors = {
    selectBooksCount,
    selectBooks,
    selectBooksLoading,
    selectInsertStatus
}
