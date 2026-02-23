import { configureStore } from "@reduxjs/toolkit";
import countslice from "./countSlice";

export const store = configureStore({
  reducer:{
    countslice
  }
})