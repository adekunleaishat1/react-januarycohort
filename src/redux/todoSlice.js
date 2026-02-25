import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = "http://localhost:1423/todo"

export const fetchalltodo = createAsyncThunk(
  'todos/fetchtodo',
  async (_, thunkAPI) => {
    const response = await axios.get(BASE_URL)
    return response.data
  },
)

const todoslice = createSlice({
    name:"todos",
    initialState:{
        loading:false,
        Todo:[]
    },
    reducers:{

    },
   extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchalltodo.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false
      state.Todo.push(action.payload)
    })
    .addCase(fetchalltodo.pending,(state)=>{
        state.loading = true
        state.Todo = []
    })
   }
})

export default todoslice.reducer
// export  {fetchalltodo} = todoslice.actions