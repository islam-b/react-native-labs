import { createAsyncThunk } from '@reduxjs/toolkit'
import {fetchBooks, insertBook} from "../../data/datasources/books.datasource"

export const getBooks = createAsyncThunk('[Books] getBooks', async (args, thunkApi)=>{ 
    let response = await fetchBooks(args.skipCount, args.maxResultCount);
    return response.data;
})

export const addBook = createAsyncThunk('[Books] addBook', async (args, thunkApi)=>{ 
    let response = await insertBook(args.book);
    return response.data;
})

