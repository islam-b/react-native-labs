import { createSlice } from '@reduxjs/toolkit'
import { loginAction } from '../actions/auth.actions';

const authInitialState = {
    accessToken: null,
    expiresIn: null,
    userInfo: {
        isAuthenticated: false,
        firstName: '',
        lastName: '',
        email: ''
    },
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder=>{
        builder.addCase(loginAction.pending, (state, action)=>{
            state.isLoading = true
        });
        builder.addCase(loginAction.fulfilled, (state, action)=>{
            let response = action.payload
            state.accessToken = response.accessToken
            state.expiresIn = response.expiresIn
            //state.userInfo = userInfo
            console.log(response)
            state.isLoading = false 
        });
        builder.addCase(loginAction.rejected, (state, action)=>{
            state.isLoading = false 
        });
    },
    reducers: {
        logout: (state, action) => {
            return authInitialState
        }
    }
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;