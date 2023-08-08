import { createAsyncThunk } from "@reduxjs/toolkit"
import Toast from "react-hot-toast"
import api from "../../utils/api.instance"

// @create async thunk
export const login = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            // @do authentication with payload : { email, password }
            const { data, headers } = await api.post("/auth/login", payload)

            const token = headers['authorization'].split(' ')[1];

            // @save token to local storage
            localStorage.setItem("token", token)

            // @show toast success
            Toast.success("Login success.")

            return data?.user
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response ? error.response.data : error)
        }
    }
)

export const keepLogin = createAsyncThunk(
    "auth/keep-login",
    async (payload, { rejectWithValue }) => {
        try {
            // @get user data with token
            const { data } = await api.get("/auth")

            return data.user
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response ? error.response.data : error)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            // @delete token from local storage
            localStorage.removeItem("token")

            return {}
        } catch (error) {
            console.error(error)
            return rejectWithValue(error.response ? error.response.data : error)
        }
    }
)

