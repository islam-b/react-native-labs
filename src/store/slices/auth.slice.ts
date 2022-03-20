import { createSlice } from '@reduxjs/toolkit'
import { UserInfoDto } from '../../data/dtos/auth';
import { loginAction } from '../actions/auth.actions';
import { AuthState } from '../types';

const authInitialState: AuthState = {
    accessToken: '',
    expiresIn: '',
    userInfo: {
        isAuthenticated: false,
        firstName: '',
        lastName: '',
        email: ''
    } as UserInfoDto,
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder.addCase(loginAction.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            let response = action.payload
            state.accessToken = response.accessToken
            state.expiresIn = response.expiresIn
            //state.userInfo = response.userInfo
            console.log(response)
            state.isLoading = false
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.isLoading = false
        });
    },
    reducers: {
        logout: (state, action) => {
            return authInitialState
        }
    }
})

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;