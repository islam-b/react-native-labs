import { createAsyncThunk } from '@reduxjs/toolkit'
import {login} from "../../data/datasources/auth.datasource"
import { AuthResultDto, LoginDto } from '../../data/dtos/auth';

export const loginAction = createAsyncThunk<AuthResultDto, LoginDto>('[Auth] login', async (args: LoginDto, thunkApi)=>{ 
    let response = await login(args.email, args.password);
    return response.data;
})