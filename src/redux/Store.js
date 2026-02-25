import { configureStore } from "@reduxjs/toolkit";
import countslice from "./countSlice";
import todoslice from "./todoSlice"

export const store = configureStore({
  reducer:{
    countslice,
    todoslice
  }
})