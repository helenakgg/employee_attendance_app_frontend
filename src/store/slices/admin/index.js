import { createSlice } from "@reduxjs/toolkit";

import {
    createEmployee,
} from "./slices"

const INITIAL_STATE = {
    isCreateLoading : false,
    list :[],
    currentPage:"",
    totalPage: "",
    detail: [],
    shiftList:[],
}