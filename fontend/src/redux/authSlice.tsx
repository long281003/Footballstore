import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginUser: {
            currenUser: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.loginUser.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.loginUser.isFetching = false;
            state.loginUser.currenUser = action.payload;
            state.loginUser.error = false
        },
        loginFailed: (state) => {
            state.loginUser.isFetching = false;
            state.loginUser.error = true;
            state.loginUser.currenUser = null

        }
    }
})


export const {
    loginStart, loginSuccess, loginFailed
} = authSlice.actions

export default authSlice.reducer