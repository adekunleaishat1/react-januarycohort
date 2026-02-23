import { createSlice } from "@reduxjs/toolkit";

const countslice = createSlice({
    name:"count",
    initialState:{
        value:0,
        isupdate:false
    },
    reducers:{
        Increament:(state)=>{
         state.value += 1
        },
        IncreaseByvalue:(state,actions)=>{
         state.value +=  actions.payload
        }
    }
})

export default countslice.reducer
export const {Increament, IncreaseByvalue} = countslice.actions