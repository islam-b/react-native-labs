import { createAsyncThunk } from '@reduxjs/toolkit'
import {fetchBooks, insertBook} from "../../data/datasources/books.datasource"
import { BookCreateDto, BookDto, BooksInputDto, PagedResultDto } from '../../data/dtos/book';

export const getBooks = createAsyncThunk<PagedResultDto<BookDto>, BooksInputDto>('[Books] getBooks', async (args: BooksInputDto, thunkApi)=>{ 
    let response = await fetchBooks(args.skipCount, args.maxResultCount);
    return response.data;
})

export const addBook = createAsyncThunk<BookDto,{book: BookCreateDto}>('[Books] addBook', async (args:{book: BookCreateDto}, thunkApi)=>{ 
    let response = await insertBook(args.book);
    return response.data;
})

