import { createAsyncThunk } from '@reduxjs/toolkit'
import {login} from "../../data/datasources/auth.datasource"

export const loginAction = createAsyncThunk('[Auth] login', async (args, thunkApi)=>{ 
    let response = await login(args.email, args.password);
    return response.data;
})