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
    role_id: null,
    email: "",
    fullname: "",
    birthdate: "",
    join_date: "",
    salary:"",
    shift_id:""
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
                role_id: action.payload?.role_id,
                email: action.payload?.email,
                fullname: action.payload?.fullname,
                birthdate: action.payload?.birthdate,
                join_date: action.payload?.join_date,
                salary: action.payload?.salary,
                shift_id: action.payload?.shift_id
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
                role_id: action.payload?.role_id,
                email: action.payload?.email,
                fullname: action.payload?.fullname,
                birthdate: action.payload?.birthdate,
                join_date: action.payload?.join_date,
                salary: action.payload?.salary,
                shift_id: action.payload?.shift_id
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