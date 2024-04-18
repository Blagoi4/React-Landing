import { configureStore } from "@reduxjs/toolkit";
import todoReduxSlice from "../pages/todoReduxSlice";




export const store = configureStore({
    reducer:{
        todo: todoReduxSlice,
    }
})