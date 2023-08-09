import { createSlice } from "@reduxjs/toolkit";
import {
    login,
    keepLogin,
    logout,
} from "./slices";

const INITIAL_STATE = {
    isLoginLoading: false,
    isKeepLoginLoading: false,
    isLogoutLoading: false,
    id: null,
    roleId: null,
    email: "",
    fullname: "",
    birthdate: "",
    joinDate: "",
    shift_id: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: {
        [login.pending] : (state, action) => {
            state.isLoginLoading = true            
        },
        [login.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoginLoading : false,
                id: action.payload?.id,
                roleId: action.payload?.roleId,
                email: action.payload?.email,
                fullname: action.payload?.fullname,
                birthdate: action.payload?.birthdate,
                joinDate: action.payload?.joinDate,
                shiftId: action.payload?.shiftId
            })
        },
        [login.rejected] : (state, action) => {
            state.isLoginLoading = false
        },
        [keepLogin.pending] : (state, action) => {
            state.isKeepLoginLoading = true
        },
        [keepLogin.fulfilled] : (state, action) => {
            state = Object.assign(state,{
                isKeepLoginLoading : false,
                id: action.payload?.id,
                roleId: action.payload?.roleId,
                email: action.payload?.email,
                fullname: action.payload?.fullname,
                birthdate: action.payload?.birthdate,
                joinDate: action.payload?.joinDate,
                shiftId: action.payload?.shiftId
            })
        },
        [keepLogin.rejected] : (state, action) => {
            state.isKeepLoginLoading = false
        },
        [logout.pending] : (state, action) => {
            state.isLogoutLoading = true
        },
        [logout.fulfilled] : (state, action) => {
            state = Object.assign(state, INITIAL_STATE)
        },
        [logout.rejected] : (state, action) => {
            state.isLogoutLoading = false
        },
       
    }
  
});

export default authSlice.reducer;