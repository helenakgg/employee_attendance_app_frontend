import { createAsyncThunk } from "@reduxjs/toolkit"
import Toast from "react-hot-toast"
import api from "../../utils/api.instance"

export const createEmployee = createAsyncThunk(
    "admin/create",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/admin/create", payload)

            // @show toast success
            Toast.success(data.message)

            return data
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data.message)
            return rejectWithValue(error.response ? error.response.data : error)
        }
    }
)
