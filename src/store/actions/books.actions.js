import { createAsyncThunk } from '@reduxjs/toolkit'
import {fetchBooks} from "../../data/services/books.service"

export const getBooks = createAsyncThunk('[Books] getBooks', async (args, thunkApi)=>{ 
    let response = await fetchBooks(args.skipCount, args.maxResultCount);
    return response.data;
})