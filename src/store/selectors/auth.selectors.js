import { createSelector } from '@reduxjs/toolkit'

const authState = (state) => state.auth //same name as the slice

const selectAccessToken = createSelector(authState, (auth) => auth.accessToken)
const selectTokenExpiration = createSelector(authState, (auth) => auth.expiresIn)
const selectUserInfo = createSelector(authState, (auth) => auth.userInfo)
const selectLoading = createSelector(authState, (auth) => auth.isLoading)


export const AuthSelectors = {
    selectAccessToken,
    selectTokenExpiration,
    selectUserInfo,
    selectLoading
}
